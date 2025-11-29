const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (filePath) => {

    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "uploads",
            transformation: [
                { width: 250, height: 250, crop: "scale" } // resize to 250x250
            ]
        });
        return {
            url: result.secure_url,
            publicId: result.public_id
        };
    } catch (err) {
        console.log("Error uploading to Cloudinary:", err);
        throw new Error(err);
    }
};

module.exports = {uploadToCloudinary};