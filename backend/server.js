
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const householdRoutes = require("./routes/householdRoutes");
const pickupRoutes = require("./routes/pickupRoutes");
const workerRoutes = require("./routes/workerRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const wasteTypeRoutes = require("./routes/wasteTypeRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Waste Pickup Platform Backend is Running!");
});

// API routes
app.use("/api/households", householdRoutes);
app.use("/api/pickups", pickupRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/waste-types", wasteTypeRoutes);

// Start server
async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
    }
}

startServer();
