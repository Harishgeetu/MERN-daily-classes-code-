const mongoose = require("mongoose")
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected Successfully")
    } catch (err) {
        console.log("failed to connect DB:", err)
    };
}
module.exports = connection;