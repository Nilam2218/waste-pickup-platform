const Worker = require("../models/Worker");

const createWorker = async (req, res) => {
    try {
        const worker = new Worker(req.body);
        const savedWorker = await worker.save();

        res.status(201).json(savedWorker);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createWorker
};