const Students = require("../model/studentmodel");

// add student
const addStudent = async (req, res) => {
  try {
    const { name, rollNo, branch, phone, email, address } = req.body;

    const student = await Students.create({
      name,
      rollNo,
      branch,
      phone,
      email,
      address,
    });

    res.status(201).json({
      message: "Student Added Successfully",
      data: student,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Failed to add the student",
      error: err.message,
    });
  }
};

// get all students
//get student based on ID
//delete student
//update studentDetails
//update only phoneNo


module.exports=addStudent;
