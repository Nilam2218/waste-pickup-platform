const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// Get all complaints
router.get("/", async (req, res) => {
try {
const complaints = await Complaint.find();
res.json(complaints);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Add a new complaint
router.post("/", async (req, res) => {
try {
const complaint = new Complaint(req.body);
const savedComplaint = await complaint.save();
res.status(201).json(savedComplaint);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

module.exports = router;
