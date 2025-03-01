import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./app/config/db";
import { userRoutes } from "./app/modules/user/user.route";

dotenv.config();
connectDB();

const app: Application = express();

app.use(express.json());
app.use(cors());

//Application routes
app.use("/api/users", userRoutes);


//===================
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my Stationary shop");
});
//===================

export default app;
