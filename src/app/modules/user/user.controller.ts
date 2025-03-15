import { Request, Response } from "express";
import * as userService from "./user.service";
import { AuthenticatedRequest } from "../payment/payment.controller";

//get user
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      users,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//get single user
export const singleUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getSingleUser(req.params.id);
    res.status(200).json({ message: "User retrieved successfully", user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//update user
export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }
    const updatedUser = await userService.updateUserProfile(userId, req.body);
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      updatedUser,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRole = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUserRole(
      req.params.id,
      req.body.role
    );
    res.status(200).json({
      success: true,
      message: "Role is updated successfully",
      updatedUser,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//delete
export const removeUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
