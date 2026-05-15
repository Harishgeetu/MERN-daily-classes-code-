const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true,
        unique: true
    },

    department: [{
        type: String
    }],

    email: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true });

const Colleges = mongoose.model("colleges", collegeSchema);

module.exports = Colleges;