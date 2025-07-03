import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String, // only for admins
  role: {
    type: String,
    enum: ["citizen", "admin"],
    default: "citizen", 
  },
});
export default mongoose.model("User", userSchema);
