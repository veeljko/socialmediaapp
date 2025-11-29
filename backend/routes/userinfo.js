const express = require("express");
const router = express.Router();
const User = require("../db/models/UserModel");


router.get("/userinfo", async (req, res) => {
    const userInfo = await User.findById(req.userId);
    if (!userInfo) {
        return res.status(401).json({ message: "User not found" });
    }
    userInfo.password=undefined;
    return res.status(200).json(userInfo);
})

module.exports = router;