import { backendAPI } from "./setupAxios";

export interface User {
  id: number;
  name: string;
  is_faculty: boolean;
}

export const getUsers = async (): Promise<User[]> => {
  const res = await backendAPI.get("/users");
  return res.data;
};
