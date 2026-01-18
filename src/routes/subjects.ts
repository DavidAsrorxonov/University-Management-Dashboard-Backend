import { ilike, or } from "drizzle-orm";
import express from "express";
import { departments, subjects } from "../db/schema";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search, department, page = 1, limit = 10 } = req.query;

    const currentPage = Math.max(1, +page);
    const limitPerPage = Math.max(1, +limit);

    const offset = (currentPage - 1) * limitPerPage;

    const filterConditions = [];

    if (search) {
      filterConditions.push(
        or(
          ilike(subjects.name, `%${search}%`),
          ilike(subjects.code, `%${search}%`),
        ),
      );
    }

    if (department) {
      filterConditions.push(ilike(departments.name, `%${department}%`));
    }
  } catch (error) {
    console.log(`Error fetching subjects using GET /subjects: ${error}`);
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
});
