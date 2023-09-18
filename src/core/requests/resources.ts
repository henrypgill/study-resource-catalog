import { backendAPI } from "./setupAxios";

export interface Resource {
  id: number;
  title: string;
  description: string;
  author_name: string | undefined;
  tags: Tag[];
  created_at: Date;
}

export interface ResourceCandidate {
  owner_id: number;
  title: string;
  author_id: number | null;
  url: string;
  description: string;
  stage_id: number | null;
  tag_ids: number[];
  recommendation: {
    recommendation_type_id: number;
    description: string;
  };
}

export interface Tag {
  id: number;
  name: string;
}

export const getResources = async (): Promise<Resource[]> => {
  const res = await backendAPI.get("/resources");
  return res.data;
};

export const getTags = async (): Promise<Tag[]> => {
  const res = await backendAPI.get("/tags");
  return res.data;
};

export const postResource = async (resource: ResourceCandidate) => {
  await backendAPI.post("/resources", resource);
};
