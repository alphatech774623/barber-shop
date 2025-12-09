import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { isAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

// Register

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({id : newUser._id}, process.env.JWT_SECRET, {expiresIn : '7d'})

    res.cookie("token", token,{
      maxAge : 7*24*60*60*1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite : process.env.NODE_ENV === "production" ? "none" : "lax",

    })

    await newUser.save();
    res.status(201).json({ msg: " User registered successfully", user : newUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      maxAge : 7*24*60*60*1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite : process.env.NODE_ENV === "production" ? "none" : "lax",
    })
      
    res.json({
      msg: " Login Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/logout", (req,res)=>{
  res.clearCookie("token");
  res.json({msg : "Logged out successfully"})
})


// In auth.js
router.post("/getCurrentUser", isAuth, async (req, res) => {
  try {
    // The 'isAuth' middleware likely attaches the user object to req.user or req.userId
    // If you have 'req.userId' from your middleware, fetch the user data
    // const userId = req.userId;
    const user = await User.findById(req.userId) // Fetch user and exclude password
    
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    
    res.status(200).json(user); // Send the user data back
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({ error: "Server error" }); // Send an error response
  }
});


export default router;









