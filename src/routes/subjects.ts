import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(`Error fetching subjects using GET /subjects: ${error}`);
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
});
