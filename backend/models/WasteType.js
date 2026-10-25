const mongoose = require("mongoose");

const wasteTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("WasteType", wasteTypeSchema);