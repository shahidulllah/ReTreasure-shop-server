import { stripe } from "../../config/stripe";
import Payment from "./payment.model";

export const createPaymentIntent = async (
  orderId: string,
  amount: number,
  userId: string
) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, 
    currency: "usd",
  });

  const payment = await Payment.create({
    user: userId,
    order: orderId,
    amount,
    status: "pending",
    paymentIntentId: paymentIntent.id,
  });

  return paymentIntent.client_secret;
};

//Update payment status
export const updatePaymentStatus = async (
  paymentIntentId: string,
  status: "paid" | "failed"
) => {
  return await Payment.findOneAndUpdate(
    { paymentIntentId },
    { status },
    { new: true }
  );
};
