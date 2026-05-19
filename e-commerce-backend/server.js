const express = require("express");
const dotenv = require("dotenv");
const connection = require("./config/database");
const userRouter = require("./routes/userRouter");
const promptRouter = require("./routes/promptRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "E-commerce backend is running" });
});

app.use("/api/users", userRouter);
app.use("/api", promptRouter);

if (process.env.MONGODB_URL) {
  connection();
} else {
  console.warn("MONGODB_URL is not set. Server started without database connection.");
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
