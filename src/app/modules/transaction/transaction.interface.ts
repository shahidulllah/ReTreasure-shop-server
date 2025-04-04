import { Document } from "mongoose";

export interface ITransaction extends Document {
  buyerId: string;
  sellerId: string;
  listingId: string;
  status: "pending" | "completed" | "canceled";
  createdAt: Date;
}
