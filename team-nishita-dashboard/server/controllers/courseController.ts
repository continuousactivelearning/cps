import { Request, Response } from "express";
import {Course} from "./../models/course.js";

export async function getAllModules(req: Request, res: Response) {
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