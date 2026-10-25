
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const WasteType = require("../models/WasteType");

// GET all waste types
router.get("/", async (req, res) => {
    try {
        const wasteTypes = await WasteType.find();
        res.status(200).json(wasteTypes);
    } catch (error) {
        console.error("GET error:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// ADD a waste type
router.post("/", async (req, res) => {
    try {
        const wasteType = new WasteType({
            name: req.body.name,
            description: req.body.description
        });

        const savedWasteType = await wasteType.save();
        res.status(201).json(savedWasteType);
    } catch (error) {
        console.error("POST error:", error.message);
        res.status(400).json({ message: error.message });
    }
});

// DELETE a waste type by ID
router.delete("/:id", async (req, res) => {
    console.log("DELETE ROUTE HIT:", req.params.id);

    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                message: "Invalid waste type ID"
            });
        }

        const deletedWasteType =
            await WasteType.findByIdAndDelete(req.params.id);

        if (!deletedWasteType) {
            return res.status(404).json({
                message: "Waste type not found"
            });
        }

        return res.status(200).json({
            message: "Waste type deleted successfully",
            deletedWasteType
        });
    } catch (error) {
        console.error("DELETE error:", error.message);
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;