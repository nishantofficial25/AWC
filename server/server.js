// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.port || 5000;
const path = require("path");
const multer = require("multer");
require("dotenv").config();

const cors = require("cors");

app.use(cors());
app.use(express.json());

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  mob: String,
  location: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signUp", async (req, res) => {
  const { name, email, mobile, profileImage, location } = req.body;
  const newUser = new User({
    name: name,
    email: email,
    picture: profileImage,
    mob: mobile,
    location: location,
  });
  await newUser.save();
  /* res.redirect("http://localhost:5173/"); */
});

app.get("/userDetails", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({
      details: allUsers,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/hindZon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: String,
  price: Number,
  Category: String,
  owner: {
    Username: String,
    mob: Number,
    location: String,
  },
  emails: String,
});
const Data = mongoose.model("Listing", DataSchema);

const ImageSchema = new mongoose.Schema({
  name: String,
  path: String,
  productId: String,
});
const Images = mongoose.model("Image", ImageSchema);

// API endpoint to get data
app.get("/products", async (req, res) => {
  try {
    const allData = await Data.find();
    const allImg = await Images.find();
    res.json({
      details: allData,
      images: allImg,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Multer setup for file uploads (in memory)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

app.post("/upload", upload.array("image", 10), async (req, res) => {
  const newData = new Data({
    title: req.body.title,
    description: req.body.desc,
    price: req.body.price,
    Category: req.body.cat,
    owner: {
      Username: req.body.name,
      mob: req.body.mob,
      location: req.body.location,
    },
    emails:req.body.email
  });
  const data = await newData.save();
  const productID = data._id.toString();

  const ImgData = req.files;

  if (!ImgData) return res.status(400).json({ message: "No file Uploaded!" });

  for (let index = 0; index < ImgData.length; index++) {
    const newImage = new Images({
      name: ImgData[index].originalname,
      path: ImgData[index].filename,
      productId: productID,
    });
    await newImage.save();
  }
  /* res.redirect("http://localhost:5173/"); */
});

//Show Route
app.get("/products/:id", async (req, res) => {
  let { id } = req.params;
  const myArray = ["Furnitures", "Electronics", "Vehicles", "Households"];
  if (myArray.includes(id)) {
    const allProduct = await Data.find({ Category: id });
    const image = await Images.find({});
    res.json({
      allProduct: allProduct,
      image: image,
    });
  } else {
    const product = await Data.find({ _id: id }); //or Listing.findById(id)
    const images = await Images.find({ productId: id });
    res.json({
      product: product,
      images: images,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
