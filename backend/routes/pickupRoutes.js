const express = require("express");
const router = express.Router();

const PickupSchedule = require("../models/PickupSchedule");

const Household = require("../models/Household");

// Get all pickup schedules with household details
router.get("/", async (req, res) => {
try {
const pickups = await PickupSchedule.find()
.populate("household", "name address ward phone");

    res.json(pickups);
} catch (error) {
    res.status(500).json({ message: error.message });
}

});

// Add pickup schedule
router.post("/", async (req, res) => {
console.log("PICKUP REQUEST RECEIVED:", req.body);

try {
    const schedule = new PickupSchedule({
        household: req.body.household,
        pickupDate: req.body.pickupDate,
        status: "Scheduled"
    });

    const savedSchedule = await schedule.save();

    const populatedSchedule = await savedSchedule.populate(
        "household",
        "name address ward phone"
    );

    res.status(201).json({
        message: "Pickup scheduled successfully",
        schedule: populatedSchedule
    });

} catch (error) {
    res.status(400).json({
        message: error.message
    });
}

});

module.exports = router;