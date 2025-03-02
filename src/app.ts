import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./app/config/db";
import { userRoutes } from "./app/modules/auth/auth.route";
import { productRouters } from "./app/modules/product/product.route";
import { orderRoutes } from "./app/modules/order/order.route";

dotenv.config();
connectDB();

const app: Application = express();

app.use(express.json());
app.use(cors());

//Application routes
app.use("/api/auth", userRoutes);
app.use("/api/products", productRouters);
app.use("/api/orders", orderRoutes);

//===================
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my ReTreasure shop");
});
//===================

export default app;
