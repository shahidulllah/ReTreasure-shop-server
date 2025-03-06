import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./app/config/db";
import { productRouters } from "./app/modules/listings/listings.route";
import { orderRoutes } from "./app/modules/order/order.route";
import { paymentRoutes } from "./app/modules/payment/payment.route";
import { authRoutes } from "./app/modules/auth/auth.route";
import { userRoutes } from "./app/modules/user/user.route";

dotenv.config();
connectDB();

const app: Application = express();

app.use(express.json());
app.use(cors());

//Application routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRouters);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/users", userRoutes);

//===================
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my ReTreasure shop");
});
//===================

export default app;
