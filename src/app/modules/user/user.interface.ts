export interface IUser {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: "user" | "admin";
}
