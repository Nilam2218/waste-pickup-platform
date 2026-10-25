const PickupSchedule = require("../models/PickupSchedule");

const createPickupSchedule = async (req, res) => {
    try {
        const schedule = new PickupSchedule(req.body);
        const savedSchedule = await schedule.save();

        res.status(201).json(savedSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPickupSchedule
};