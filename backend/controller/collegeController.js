const Colleges = require("../model/collegemodel");


// ADD COLLEGE
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


// GET ALL COLLEGES
const getAllColleges = async (req, res) => {

    try {

        const data = await Colleges.find();

        res.status(200).json(data);

    } 
    catch(error) {

        res.status(500).json({
            message: "Failed to fetch colleges"
        });

    }
};


// DELETE COLLEGE
const deleteCollege = async (req, res) => {

    try {

        const deletedDocument = await Colleges.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Record deleted successfully",
            deletedDocument
        });

    } 
    catch(error) {

        res.status(500).json({
            message: "Failed to delete data",
            error: error.message
        });

    }
};
const up

module.exports = {
    addCollege,
    getAllColleges,
    deleteCollege
};