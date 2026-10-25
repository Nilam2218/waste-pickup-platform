const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    household: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Household",
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    }
});

module.exports = mongoose.model("Complaint", complaintSchema);