const express = require("express");
const app = express();

const PORT = 5000;

const connection = require("./config/db");

app.use(express.json());

const studentrouter = require("./routes/studentrouter");
app.use("/student", studentrouter);

const collegeRouter = require("./routes/collegerouter");
app.use("/college", collegeRouter);

connection();

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
});