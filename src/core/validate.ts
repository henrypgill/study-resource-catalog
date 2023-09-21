import { ResourceCandidate } from "./requests/resources";

export function isValidForm(resource: ResourceCandidate): boolean {
  if (resource.title === "") return false;
  if (resource.url === "") return false;
  if (resource.description === "") return false;
  if (resource.recommendation_content === "") return false;
  if (resource.recommendation_type_id === -1) return false;
  if (resource.owner_id === -1) return false;

  return true;
}
