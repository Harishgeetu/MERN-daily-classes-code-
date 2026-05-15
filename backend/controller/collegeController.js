const Colleges = require("../model/collegemodel");

const addCollege = async (req, res) => {

    try {

        const data = await Colleges.create(req.body);

        res.status(201).json({
            message: "College added successfully",
            data
        });

    } 
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to add college",
            error: error.message
        });

    }
};

module.exports = addCollege;