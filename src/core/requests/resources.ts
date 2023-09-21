import { backendAPI } from "./setupAxios";
import { User } from "./users";

export interface Resource {
  id: number;
  title: string;
  description: string;
  author_name: string | undefined;
  tags: Tag[];
  created_at: Date;
}

export interface ResourceCandidate {
  title: string;
  author_id?: number;
  url: string;
  description: string;
  stage_id?: number;
  owner_id: number;
  recommendation_type_id: number;
  recommendation_content: string;
  tag_names: string[];
}

export interface ResourceDetail {
  id: number;
  title: string;
  // author: {
  //   id: number | null,
  //   name: string | null,
  // }
  url: string;
  description: string;
  created_at: Date;
  // cohort_stage: {
  //   id: number,
  //   name: string
  // }
  recommendation: {
    recommendation_type_id: number;
    recommendation_type: string;
    content: string;
  };
  owner: User;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}

export interface Recommendation {
  id: number;
  description: string;
}
export const getResources = async (): Promise<Resource[]> => {
  const res = await backendAPI.get("/resources");
  return res.data;
};

export const getResourceDetail = async (
  id: number | string
): Promise<ResourceDetail> => {
  const res = await backendAPI.get(`/resources/${id}`);
  return res.data;
};

export const getTags = async (): Promise<Tag[]> => {
  const res = await backendAPI.get("/tags");
  return res.data;
};

export const getRecommendationOpts = async (): Promise<Recommendation[]> => {
  const res = await backendAPI.get("/recommendations");
  return res.data;
};

export const postResource = async (resource: ResourceCandidate) => {
  await backendAPI.post("/resources", resource);
};
