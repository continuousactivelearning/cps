   const express = require('express');
   const bcrypt = require('bcryptjs');
   const jwt = require('jsonwebtoken');
   const User = require('../models/User');
   const router = express.Router();

   // Register
   router.post('/register', async (req, res) => {
       const { username, password } = req.body;

       try {
           let user = await User.findOne({ username });
           if (user) {
               return res.status(400).json({ msg: 'User  already exists' });
           }

           user = new User({ username, password: await bcrypt.hash(password, 10) });
           await user.save();

           res.status(201).json({ msg: 'User  registered successfully' });
       } catch (error) {
           console.error(error);
           res.status(500).json({ msg: 'Server error' });
       }
   });

   // Login
   router.post('/login', async (req, res) => {
       const { username, password } = req.body;

       try {
           const user = await User.findOne({ username });
           if (!user) {
               return res.status(400).json({ msg: 'Invalid credentials' });
           }

           const isMatch = await bcrypt.compare(password, user.password);
           if (!isMatch) {
               return res.status(400).json({ msg: 'Invalid credentials' });
           }

           const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
           res.json({ token });
       } catch (error) {
           console.error(error);
           res.status(500).json({ msg: 'Server error' });
       }
   });

   module.exports = router;
   