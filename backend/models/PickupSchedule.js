const mongoose = require("mongoose");

const pickupScheduleSchema = new mongoose.Schema({
    household: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Household",
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: "Scheduled"
    }
});

module.exports = mongoose.model("PickupSchedule", pickupScheduleSchema);