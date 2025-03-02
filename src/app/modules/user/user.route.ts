import express from "express";
import * as userController from "./user.controller";
import { protect } from "../../middleware/authMiddleware";

const router = express.Router();

router.put("/profile", protect, userController.updateProfile);

export const userRoutes = router;
