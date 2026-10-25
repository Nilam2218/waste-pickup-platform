const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");

// Get all workers
router.get("/", async (req, res) => {
try {
const workers = await Worker.find();
res.json(workers);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Add a new worker
router.post("/", async (req, res) => {
try {
const worker = new Worker(req.body);
const savedWorker = await worker.save();
res.status(201).json(savedWorker);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

module.exports = router;
