const express = require("express");
const router = express.Router();
const Household = require("../models/Household");

// Get all households
router.get("/", async (req, res) => {
try {
const households = await Household.find();
res.json(households);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Register a new household
router.post("/", async (req, res) => {
try {
const household = new Household(req.body);
const savedHousehold = await household.save();
res.status(201).json(savedHousehold);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

module.exports = router;
