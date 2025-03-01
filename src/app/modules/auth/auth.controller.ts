import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

//Register
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully. Please log in.",
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Registration failed. Please try again.",
    });
  }
};

//Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.status(200).json({
      success: true,
      message: "Login successful!",
      user,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || "Invalid credentials. Please try again.",
    });
  }
};
