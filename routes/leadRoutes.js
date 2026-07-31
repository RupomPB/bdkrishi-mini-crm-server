import express from "express";

import {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createLead);

router.get("/", getLeads);

router.get("/:id", getLead);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

export default router;