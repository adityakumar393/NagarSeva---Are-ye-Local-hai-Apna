import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    images: [String], // Cloudinary image URLs
    category: String,
    subcategory: String,
    state: String,
    status: {
      type: String,
      enum: ["pending", "in_progress", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
