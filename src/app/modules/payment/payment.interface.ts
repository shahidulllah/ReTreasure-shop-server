export interface IPayment {
    user: string |undefined;
    order: string | undefined;
    amount: number;
    status: "pending" | "paid" | "failed";
    paymentIntentId?: string;
  }
  