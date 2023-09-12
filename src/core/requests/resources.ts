import { backendAPI } from "./setupAxios";

export const getResources = async () => {
  const res = await backendAPI.get("/resources");
  return res.data;
};
