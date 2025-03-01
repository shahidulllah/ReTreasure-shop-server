import { Request, Response } from "express";
import { registerUser, loginUser } from "./user.service";

//Register
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
