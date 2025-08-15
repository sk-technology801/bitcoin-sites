import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assets: [{ coin: String, quantity: Number }]
}, { timestamps: true });

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);
