import { useQuery } from "@tanstack/react-query";
import { getResources } from "../core/requests/resources";

type Resource = string;

export const useResources = () => {
  const query = useQuery<Resource[]>({
    queryKey: ["resources"],
    queryFn: getResources,
  });

  return { ...query };
};
