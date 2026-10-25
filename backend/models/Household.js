const mongoose = require("mongoose");

const householdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ward: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Household", householdSchema);