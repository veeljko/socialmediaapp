const mongoose = require('mongoose');

const connectDatabase = async () => {
    try{
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log("Connected to Database");
    }
    catch(e){
        console.error(e);
        process.exit(1);
    }
}

module.exports = connectDatabase;