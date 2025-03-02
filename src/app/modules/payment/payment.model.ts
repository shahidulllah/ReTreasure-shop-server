import mongoose, { Schema, Document } from "mongoose";
import { IPayment } from "./payment.interface";

export interface IPaymentModel extends IPayment, Document {}

const PaymentSchema = new Schema<IPaymentModel>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentIntentId: { type: String, required: true },
  },
  { timestamps: true }
);

const Payment = mongoose.model<IPaymentModel>("Payment", PaymentSchema);
export default Payment;
