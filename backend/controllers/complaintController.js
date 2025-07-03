import Complaint from "../models/Complaint.js";

// ✅ Citizen: Submit complaint
export const submitComplaint = async (req, res) => {
  try {
    const { title, description, category, subcategory, state } = req.body;
    const imageUrls = req.files.map(file => file.path);

    const complaint = await Complaint.create({
      citizen: req.user.id,
      title,
      description,
      category,
      subcategory,
      state,
      images: imageUrls,
    });

    res.status(201).json({ message: "Complaint submitted", complaint });
  } catch (err) {
    res.status(500).json({ message: "Submission failed", error: err.message });
  }
};

// ✅ Citizen: Get their complaints
export const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ citizen: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch complaints", error: err.message });
  }
};

// ✅ Admin: View all complaints
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate("citizen", "name email").sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Error fetching complaints", error: err.message });
  }
};

// ✅ Admin: Update complaint status
export const updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const complaint = await Complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!complaint) return res.status(404).json({ message: "Complaint not found" });

    res.status(200).json({ message: "Status updated", complaint });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
