import express from "express";
import * as userController from "./user.controller";
import { protect } from "../../middlewares/authMiddleware";
import { admin } from "../../middlewares/adminMiddleware";

const router = express.Router();

router.get("/", protect, userController.getUsers);
router.get("/:id", userController.singleUser);
router.put("/profile/:userId", userController.updateProfile);
router.put("/:id", protect, admin, userController.updateRole);
router.delete("/:id", protect, admin, userController.removeUser);

export const userRoutes = router;
