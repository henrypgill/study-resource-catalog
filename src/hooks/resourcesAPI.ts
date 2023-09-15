import { useQuery } from "@tanstack/react-query";
import { getResources, getTags } from "../core/requests/resources";

export const useResources = () => {
  const query = useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
    initialData: [],
  });

  return { ...query };
};

export const useTags = () => {
  const query = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
    initialData: [],
  });

  return { ...query };
};
