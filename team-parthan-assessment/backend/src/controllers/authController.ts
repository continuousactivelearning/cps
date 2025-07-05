import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { sendEmail } from '../services/emailService';

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  role: z.enum(['student', 'instructor'])
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

function generateInstructorCode() {
  return 'IN' + Math.random().toString(36).substring(2, 8).toUpperCase(); // e.g., IN5A2X9
}

export const signup = async (req: Request, res: Response) => {
  try {
    const validatedData = signupSchema.parse(req.body);
    const { name, email, password, role } = validatedData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password, role});
    if (role === 'instructor') {
  const instructorCode = generateInstructorCode(); // e.g., a random 6-digit alphanumeric code
  user.instructorCode = instructorCode;
}

    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    res.status(201).json({ token, userId: user._id, role: user.role  });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: err.errors[0].message });
    }
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    res.json({ token, userId: user._id, role: user.role  });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: err.errors[0].message });
    }
    res.status(500).json({ message: 'Something went wrong' });
  }
};
export const requestPasswordReset= async(req:any,res:any)=>{
  const {email}=req.body;
  const user = await User.findOne({email});
  if (!user) return res.status(400).send("User not found");
  const token= jwt.sign({id:user._id},process.env.JWT_SECRET!,{expiresIn:"15m"});
  const resetLink = `https://cps-ten.vercel.app/reset-password?token=${token}`;
  await sendEmail(email, "Reset your password", `Click here to reset: ${resetLink} \nToken valid for only 15 minutes`);

  res.send("Reset email sent");
}
export const passwordReset= async(req:any,res:any)=>{
  
  const {token,newPassword}=req.body;
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    let userId;
    if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
      userId = (decoded as { id: string }).id;
    } else {
      return res.status(400).send("Invalid token");
    }
    const user = await User.findById(userId);
    if (!user) return res.status(404).send("Invalid token");
    user.password = newPassword;
    await user.save();
    res.send("Password updated");
  }
  catch(error){
    res.status(400).send("Invalid or expired token");
  }
}