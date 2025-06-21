import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { z } from "zod";

export const details = async (req: any, res: any) => {
  const data = req.userId;
  const user = await User.findById(data).select('-password').select('-__v');
  return res.json(user);
};

export const uploadPhoto = async (req: any, res: any) => {
  try {
    const id = req.userId;
    const { photo } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Missing userId" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { avatar: photo as string },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(201)
      .json({ message: "Updated profile picture successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateDetails = async (req: any, res: any) => {
  try {
    const id = req.userId;
    const { item, value } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Missing userId" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { [item]: value },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(201).json({ message: `Updated ${item} successfully.` });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateStreak= async(req:any, res:any)=>{
  const userId= req.userId;
  const user= await User.findById(userId);
  const today= (new Date()).toLocaleDateString('en-IN',{dateStyle:'medium'});
  const yesterdayDate= new Date();
  yesterdayDate.setDate(yesterdayDate.getDate()-1);
  const yesterday=yesterdayDate.toLocaleDateString('en-IN',{dateStyle:'medium'});
  if (!user){
    console.log('Invalid user');
    return;
  }
  if (!user?.lastLogin) {
      user && (user.lastLogin = today);
      console.log("✅ lastLogin added.");
      user.streak=1;
    }

  if (user?.lastLogin===''){
    user.lastLogin=today;
    user.streak=1;
  }
  else if (user?.lastLogin===today){

  }
  else if (user?.lastLogin===yesterday){
    user.streak+=1;
    user.lastLogin=today;    
  }
  else{
    user && (user.streak = 1);
    user && (user.lastLogin=today);
  }
  await user?.save();
  return res.status(201).json(user.streak);
}
