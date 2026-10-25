const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    ward: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Worker", workerSchema);