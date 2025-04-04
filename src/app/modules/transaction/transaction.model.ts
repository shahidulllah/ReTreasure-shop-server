import mongoose, { Schema } from "mongoose";
import { ITransaction } from "./transaction.interface";

const TransactionSchema = new Schema<ITransaction>({
  buyerId: { type: String, required: true },
  sellerId: { type: String, required: true },
  listingId: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const TransactionModel = mongoose.model<ITransaction>(
  "Transaction",
  TransactionSchema
);

export default TransactionModel;
