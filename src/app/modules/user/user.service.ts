import { IUser } from "./user.interface";
import { generateToken } from "../../utils/jwt";
import bcrypt from "bcryptjs";
import User from "./user.model";

//Registration
export const registerUser = async (userData: IUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) throw new Error("User already exists");

  const newUser = await User.create(userData);
  return newUser.toObject();
};

//Login
export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return { ...user.toObject(), token: generateToken(user._id.toString()) };
};
