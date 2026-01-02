const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/awc")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
