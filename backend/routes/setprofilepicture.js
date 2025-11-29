const express = require("express");
const router = express.Router();
const User = require("../db/models/UserModel");
const cloudinary = require("../helper/cloudinaryhelper.js");

router.put("/setprofilepicture", async (req, res) => {
    const userId = req.userId;
    const profilePicturePath = req.file.path;

    if (!profilePicturePath) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).send("User not found.");
    }

    const {url, publicId} = await cloudinary.uploadToCloudinary(profilePicturePath);

    user.profilePictureUrl = url;
    user.profilePicturePublicId = publicId;
    await user.save();

    const fs = require("fs");
    fs.unlinkSync(profilePicturePath);
    return res.status(200).json({message: "Upload successful"});
})

module.exports = router;