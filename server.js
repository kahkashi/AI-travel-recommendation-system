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
    const { preferences } = req.body;

    if (!preferences) {
      return res.status(400).json({ error: "preferences is required" });
    }

    const recommendation = await getTravelRecommendation(preferences);

    res.json({ recommendation });
  } catch (error) {
    console.error("Recommendation error:", error.message);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
});

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Travel Genie backend is running!");
});
