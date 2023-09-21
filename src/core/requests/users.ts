import { Resource } from "./resources";
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

export const getUserStudyList = async (
  userId: number | string
): Promise<Resource[]> => {
  const res = await backendAPI.get(`/users/${userId}/study_list`);
  return res.data;
};

export const postToUserStudyList = async ({
  userId,
  resourceId,
}: {
  userId: number | string;
  resourceId: number | string;
}) => {
  await backendAPI.post(`/users/${userId}/study_list/${resourceId}`);
};

export const deleteFromUserStudyList = async ({
  userId,
  resourceId,
}: {
  userId: number | string;
  resourceId: number | string;
}) => {
  await backendAPI.delete(`/users/${userId}/study_list/${resourceId}`);
};
