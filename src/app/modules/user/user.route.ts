import express from "express";
import * as userController from "./user.controller";
import { protect } from "../../middleware/authMiddleware";
import { admin } from "../../middleware/adminMiddleware";

const router = express.Router();

router.get("/", protect, admin, userController.getUsers);
router.get("/:id", protect,userController.singleUser);
router.put("/profile", protect, userController.updateProfile);
router.put("/:id", protect, admin, userController.updateRole);
router.delete("/:id", protect, admin, userController.removeUser);

export const userRoutes = router;
