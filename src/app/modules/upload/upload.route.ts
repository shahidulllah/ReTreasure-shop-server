import { Router } from "express";
import { upload } from "../../middlewares/multer";
import { uploadImage } from "./upload.controller";

const router = Router();

router.post("/upload", upload.single("file"), uploadImage);

export const uploadRoutes = router;
    