require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDataBase = require("./db/database");
const loginRoute = require("./routes/loginroute");
const registerRoute = require("./routes/registerroute");
const authMiddleware = require("./middleware/auth.js");
const userinfo = require("./routes/userinfo.js");
const editUser = require("./routes/editUser.js");
const profileinfo = require("./routes/profileinfo.js");
const uploadimage = require("./middleware/uploadimage.js");
const setprofilepicture = require("./routes/setprofilepicture.js");

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.json());

app.use("/api/user", profileinfo);
app.use("/api", loginRoute);
app.use("/api", registerRoute);
app.use("/api", authMiddleware, userinfo);
app.use("/api", authMiddleware, editUser);
app.use("/api", authMiddleware, uploadimage.single("image"),  setprofilepicture);

connectDataBase().then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
});
