const express = require("express");
const router = express.Router();
const User = require("../db/models/UserModel");


router.get("/:username", async (req, res) => {
    const { username } = req.params;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
})

module.exports = router;