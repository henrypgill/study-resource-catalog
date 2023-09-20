import { useQuery } from "@tanstack/react-query";
import { getRecommendationOpts } from "../core/requests/resources";

export const useRecommendationOpts = () => {
  const query = useQuery({
    queryKey: ["recommendationOpts"],
    queryFn: getRecommendationOpts,
    staleTime: Infinity,
  });

  return { ...query };
};
