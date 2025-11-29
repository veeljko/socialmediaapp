const express = require("express");
const router = express.Router();
const User = require("../db/models/UserModel");
const bcrypt = require("bcrypt");

// register route
router.post("/register", async (req, res) => {
    try {
        const username = req.body.username.trim();
        const password = req.body.password.trim();


        // check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // create the user
        const newUser = await User.create({
            username: username,
            password: password
        });

        res.status(201).json({ message: "User created", userId: newUser._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
