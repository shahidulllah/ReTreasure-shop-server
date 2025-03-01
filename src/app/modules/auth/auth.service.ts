import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../user/user.model";

export const registerUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
  return { user, token };
};
