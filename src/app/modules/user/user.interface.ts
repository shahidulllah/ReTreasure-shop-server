export interface IUser {
  name: string;
  email: string;
  phone?: string;
  image?: string;
  password: string;
  role: "user" | "admin";
}
