import e, { Request, Response } from "express";
import { Course } from "./../models/course.js";
import { User } from "../models/user.js";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function addModules(req: Request, res: Response) {
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    if (!user.role || user.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden: Admins only' });
      return;
    }
    const { id, label, prerequisites } = req.body;
    if (!id || !label) {
      res.status(400).json({ message: 'ID and label are required' });
      return;
    }
    const existingModule = await Course.findOne({ id });
    if (existingModule) {
      res.status(400).json({ message: 'Module with this ID already exists' });
      return;
    }
    const newModule = await Course.create({ id, label, prerequisites: prerequisites || [] });
    res.status(201).json({
      message: 'Module added successfully',
      data: newModule
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add module' });
  }
}

export async function getModuleById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const module = await Course.findOne({ id });
    if (!module) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }
    res.status(200).json({
      message: 'Module fetched successfully',
      data: module
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch module' });
  }
}

export async function searchModuleByLabel(req: Request, res: Response): Promise<void> {
  try {
    const { label } = req.body;
    if (!label) {
      res.status(400).json({ message: 'Label parameter is required' });
      return;
    }
    const modules = await Course.find({ label: new RegExp(label as string, 'i') });
    if (modules.length === 0) {
      res.status(404).json({ message: 'No modules found with the given label' });
      return;
    }
    res.status(200).json({
      message: 'Modules fetched successfully',
      data: modules
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to search modules' });
  }
}

export async function getAllModules(req: Request, res: Response): Promise<void> {
  try {
    const modules = await Course.find({});
    if (!modules || modules.length === 0) {
      throw new Error('No modules found');
    }
    res.status(200).json({
      message: 'Modules fetched successfully',
      data: modules
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch modules' });
  }
}

export async function updateModule(req: Request, res: Response): Promise<void> {
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    if (!user.role || user.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden: Admins only' });
      return;
    }
    const { id } = req.params;
    const { label, prerequisites } = req.body;
    const updatedModule = await Course.findOneAndUpdate(
      { id },
      { label, prerequisites },
      { new: true }
    );
    if (!updatedModule) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }
    res.status(200).json({
      message: 'Module updated successfully',
      data: updatedModule
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update module' });
  }
}

export async function deleteModule(req: Request, res: Response): Promise<void> {
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    if (!user.role || user.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden: Admins only' });
      return;
    }
    const { id } = req.params;
    const deletedModule = await Course.findOneAndDelete({ id });
    if (!deletedModule) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }
    res.status(200).json({
      message: 'Module deleted successfully',
      data: deletedModule
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete module' });
  }
}