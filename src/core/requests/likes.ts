import { backendAPI } from "./setupAxios";

export interface ResourceLike {
  user_id: number;
  user_name: string;
}

export const getLikes = async (
  resourceId: number | string
): Promise<ResourceLike[]> => {
  const res = await backendAPI.get(`/resources/${resourceId}/likes/`);
  return res.data;
};
