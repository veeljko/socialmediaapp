const express = require("express");
const router = express.Router();
const User = require("../db/models/UserModel");
const bcrypt = require("bcrypt");

router.put("/edituser", async (req, res) => {
    const newUsername = req.body.username.trim();
    const oldPassword = req.body.oldpassword.trim();
    const newPassword = req.body.newpassword.trim();
    //console.log(newUsername, oldPassword, newPassword);

    const user = await User.findById(req.userId);
    if (!user) return res.status(400).json({ message: "User not found" });

    if (! (await bcrypt.compare(oldPassword, user.password))) {
        return res.status(400).json({ message: "Wrong password" });
    }
    user.username = newUsername;
    user.password = newPassword;
    await user.save();
    return res.status(200).json({ message: "User updated" });
});

module.exports = router;