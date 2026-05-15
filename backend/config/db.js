const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");

        console.log("DB CONNECTED SUCCESSFULLY!");
    } 
    catch (error) {
        console.log("DB CONNECTION ERROR:", error);
    }
};

module.exports = connection;
