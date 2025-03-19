import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./app/config/db";
import { orderRoutes } from "./app/modules/order/order.route";
import { paymentRoutes } from "./app/modules/payment/payment.route";
import { authRoutes } from "./app/modules/auth/auth.route";
import { userRoutes } from "./app/modules/user/user.route";
import { listingRoutes } from "./app/modules/listings/listings.route";

dotenv.config();
connectDB();

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin:"http://localhost:3000",   //https://re-treasure.vercel.app
    credentials: true,
  })
);

//Application routes
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/users", userRoutes);

//===================
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my ReTreasure shop");
});
//===================

export default app;
