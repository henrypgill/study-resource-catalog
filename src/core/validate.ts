import { ResourceCandidate } from "./requests/resources";

export function isValidForm(resource: ResourceCandidate): boolean {
  if (resource.title === "") return false;
  if (resource.url === "") return false;
  if (resource.description === "") return false;
  if (resource.recommendation.description === "") return false;
  if (resource.recommendation.recommendation_type_id === null) return false;

  return true;
}
