import { useQuery } from "@tanstack/react-query";
import { getResources } from "../core/requests/resources";

export const useResources = () => {
  const query = useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
    initialData: [],
  });

  return { ...query };
};
