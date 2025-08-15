import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema({
  coin: String,
  type: { type: String, enum: ["buy", "sell"] },
  amount: Number,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.models.Trade || mongoose.model("Trade", TradeSchema);
