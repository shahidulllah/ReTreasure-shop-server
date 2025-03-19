import User from "./user.model";

//get user
export const getAllUsers = async () => {
  return await User.find({}, "-password");
};

//delete user
export const getSingleUser = async (userId: string) => {
  return await User.findById(userId, "-password");
};

//Update user
export const updateUserProfile = async (userId: string, data: any) => {
  try {
    const user = await User.findByIdAndUpdate(userId, data, { new: true });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserRole = async (userId: string, role: string) => {
  return await User.findByIdAndUpdate(userId, { role }, { new: true });
};

//delete user
export const deleteUser = async (userId: string) => {
  return await User.findByIdAndDelete(userId);
};

