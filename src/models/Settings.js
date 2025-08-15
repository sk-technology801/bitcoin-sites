import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  theme: { type: String, default: "light" },
  notifications: { type: Boolean, default: true },
  language: { type: String, default: "en" }
}, { timestamps: true });

export default mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
