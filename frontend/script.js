document.getElementById("registerBtn").addEventListener("click", async function () {
    const name = document.getElementById("householdName").value.trim();
    const address = document.getElementById("address").value.trim();
    const ward = document.getElementById("ward").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !address || !ward || !phone) {
        alert("Please fill all household details.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/households", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, address, ward, phone })
        });

        const data = await response.json();

        if (!response.ok) {
            alert("Household Error: " + data.message);
            return;
        }

        alert("Household Registered Successfully! 🏠");
    } catch (error) {
        console.error("Household Error:", error);
        alert("Backend connection failed. Please check the server.");
    }
});


// Find registered household by name
async function findHouseholdByName(name) {
    const response = await fetch("http://localhost:5000/api/households");
    const households = await response.json();

    if (!response.ok) {
        throw new Error("Could not load households.");
    }

    return households.find(
        household =>
            household.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
}


// Schedule Waste Pickup
async function schedulePickup() {
    const householdName = document.getElementById("pickupHousehold").value.trim();
    const waste = document.getElementById("wasteType").value;
    const date = document.getElementById("pickupDate").value;
    const time = document.getElementById("pickupTime").value;

    if (!householdName || !waste || !date || !time) {
        alert("Please fill all pickup details.");
        return;
    }

    try {
        const household = await findHouseholdByName(householdName);

        if (!household) {
            alert("Household not found. Please enter the exact registered name.");
            return;
        }

        const response = await fetch("http://localhost:5000/api/pickups", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                household: household._id,
                pickupDate: new Date(`${date}T${time}`).toISOString(),
                wasteType: waste
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert("Pickup Error: " + data.message);
            return;
        }

        alert("Waste Pickup Scheduled Successfully! 🚛");
    } catch (error) {
        console.error("Pickup Error:", error);
        alert("Pickup save failed: " + error.message);
    }
}


// Submit Complaint
document.getElementById("complaintBtn").addEventListener("click", async function () {
    const householdName = document.getElementById("complaintHousehold").value.trim();
    const complaintText = document.getElementById("complaint").value.trim();

    if (!householdName || !complaintText) {
        alert("Please enter the household name and your complaint.");
        return;
    }

    try {
        const household = await findHouseholdByName(householdName);

        if (!household) {
            alert("Household not found. Please enter the exact registered name.");
            return;
        }

        const response = await fetch("http://localhost:5000/api/complaints", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                household: household._id,
                complaint: complaintText
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert("Complaint Error: " + data.message);
            return;
        }

        alert("Complaint Submitted Successfully! ✅");
    } catch (error) {
        console.error("Complaint Error:", error);
        alert("Complaint save failed: " + error.message);
    }
});