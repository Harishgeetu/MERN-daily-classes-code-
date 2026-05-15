const addcollege = require("../controller/collegeController");

const express = require("express");

const router = express.Router();

router.post("/add-college", addcollege);

module.exports = router;