const Household = require("../models/Household");

const createHousehold = async (req, res) => {
    try {
        const household = new Household(req.body);
        const savedHousehold = await household.save();

        res.status(201).json(savedHousehold);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createHousehold
};