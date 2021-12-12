import { usersDb } from "./db";

interface UserType {
  key: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  designation: string;
  role: string[];
  department: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
}


export async function getUser(key: string) {
  const user = await usersDb.get(key);
  return user as unknown as UserType | null;
}
