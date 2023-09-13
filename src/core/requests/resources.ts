import { backendAPI } from "./setupAxios";

export interface Resource {
  id: number;
  title: string;
  description: string;
  tags: string[];
  created_at: Date;
}

export const getResources = async (): Promise<Resource[]> => {
  const res = await backendAPI.get("/resources");
  return res.data;
};
