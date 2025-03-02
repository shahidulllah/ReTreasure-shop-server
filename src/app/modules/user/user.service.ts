import User from "./user.model";

export const updateUserProfile = async (
  userId: string,
  updates: Partial<{
    name: string;
    email: string;
    password: string;
    phone: string;
  }>
) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  if (updates.name) user.name = updates.name;
  if (updates.email) user.email = updates.email;
  if (updates.phone) user.phone = updates.phone;
  if (updates.password) user.password = updates.password;

  await user.save();
  return user;
};
