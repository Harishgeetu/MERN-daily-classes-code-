const express = require("express");

const router = express.Router();

const {
    addCollege,
    getAllColleges,
    deleteCollege
} = require("../controller/collegeController");

router.post("/add-college", addCollege);

router.get("/all-colleges", getAllColleges);

router.delete("/delete-college/:id", deleteCollege);

module.exports = router;