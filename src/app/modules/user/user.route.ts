import express from "express";
import * as userController from "./user.controller";
import { protect } from "../../middleware/authMiddleware";

const router = express.Router();

router.get("/", protect, admin, userController.getUsers);
router.put("/profile", protect, userController.updateProfile);
router.delete("/:id", protect, admin, userController.removeUser);

export const userRoutes = router;
