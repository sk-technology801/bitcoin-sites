import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  email: String,
  bio: String,
  avatar: String
}, { timestamps: true });

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
