require("dotenv").config();

const path = require("path");
const express = require("express");
const { getTravelRecommendation } = require("./services/nabhService");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Travel Genie!!");
});

app.get("/api/destinations", (req, res) => {
  res.json([
    {
      name: "Manali",
      vibe: "mountains",
    },
    {
      name: "Goa",
      vibe: "beach",
    },
  ]);
});

app.post("/api/recommendations", async (req, res) => {
  try {
    const { destination, vibe, budget, numberOfDays, travelType } = req.body;

    if (!destination || !vibe || !budget || !numberOfDays || !travelType) {
      return res.status(400).json({ error: "destination, vibe, budget, numberOfDays, and travelType are all required" });
    }

    const recommendation = await getTravelRecommendation({ destination, vibe, budget, numberOfDays, travelType });

    res.json({ recommendation });
  } catch (error) {
    console.error("Recommendation error:", error.message);
    console.error("Full error details:", error);
    res.status(500).json({ error: "Failed to generate recommendation - " + error.message });
  }
});

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Travel Genie backend is running!");
});
