const express = require("express");
const Menu = require("../models/Menu");

const router = express.Router();

// ✅ ADD MENU ITEMS
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const saved = await Menu.insertMany(data);

    res.status(201).json({
      success: true,
      message: "Menu added successfully",
      data: saved,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET MENU (USED BY FRONTEND)
router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add data
router.post("/add", async (req, res) => {
  try {
    const Added = await Menu.save(req.params.id, req.body);

    res.json({
      success: true,
      message: "Menu Added successfully",
      data: Added,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE menu item
router.put("/update/:id", async (req, res) => {
  try {
    const updated = await Menu.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Menu updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE menu item
router.delete("/delete/:id", async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
