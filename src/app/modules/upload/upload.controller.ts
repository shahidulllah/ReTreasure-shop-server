import { Request, Response } from "express";
import cloudinary from "../../config/cloudinary";

export const uploadImage = async (req: Request, res: Response) => {
  console.log("file: ",req.file);
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    // Convert buffer to base64
    const fileBase64 = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    const uploadResult = await cloudinary.uploader.upload(fileBase64, {
      folder: "portfolio_uploads",
    });

    res.json({
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
};
