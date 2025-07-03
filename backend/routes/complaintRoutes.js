
import express from "express";
import { upload } from "../utils/cloudinary.js";
import {
  submitComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus
} from "../controllers/complaintController.js";
import { verifyToken, isCitizen, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Citizen submits a complaint
router.post("/submit", verifyToken, isCitizen, upload.array("images", 3), submitComplaint);

// Citizen gets own complaints
router.get("/my", verifyToken, isCitizen, getMyComplaints);

// Admin gets all complaints
router.get("/all", verifyToken, isAdmin, getAllComplaints);

// Admin updates status
router.patch("/:id/status", verifyToken, isAdmin, updateComplaintStatus);

export default router;
