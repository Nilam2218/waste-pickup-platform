const Complaint = require("../models/Complaint");

const createComplaint = async (req, res) => {
    try {
        const complaint = new Complaint(req.body);
        const savedComplaint = await complaint.save();

        res.status(201).json(savedComplaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createComplaint
};