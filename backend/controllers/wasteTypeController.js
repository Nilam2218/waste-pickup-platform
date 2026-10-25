const WasteType = require("../models/WasteType");

const createWasteType = async (req, res) => {
    try {
        const wasteType = new WasteType(req.body);
        const savedWasteType = await wasteType.save();

        res.status(201).json(savedWasteType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createWasteType
};