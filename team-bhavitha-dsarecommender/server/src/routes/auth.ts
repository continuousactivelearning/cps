import express, { Request, Response } from 'express';
const router = express.Router();
import User from "../models/users";

// Simulated in-memory user storage
const dummyUsers: { username: string; password: string }[] = [
  { username: 'anurag', password: '1234' },
  { username: 'testuser', password: 'abcd' }
];

// POST /api/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required." });
    return;
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).json({ error: "User not found." });
      return;
    }

    if (user.password !== password) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    // Send user profile (omit password)
    const { name, email, progress, mastery, recommendations } = user;

    res.status(200).json({
      message: "Login successful",
      user: {
        username,
        name,
        email,
        progress,
        mastery,
        recommendations,
      },
    });
    return;
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error." });
    return;
  }
});


// POST /api/register
router.post("/register", async (req, res) => {
  const { name, username, password, email, progress } = req.body;

  if (!name || !username || !password) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(409).json({ error: "Username already exists." });
      return;
    }

    const newUser = new User({
      name,
      username,
      password,
      email,
      progress,
      mastery: {},
      recommendations: [],
    });

    await newUser.save();

    res.status(201).json({ message: "User registered.", user: newUser });
    return;
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Internal server error." });
    return;
  }
});

export default router;
