import { useQuery } from "@tanstack/react-query";
import { getRecommendationOpts } from "../core/requests/resources";

const ONE_HOUR = 3600000;

export const useRecommendationOpts = () => {
  const query = useQuery({
    queryKey: ["recommendationOpts"],
    queryFn: getRecommendationOpts,
    staleTime: ONE_HOUR,
  });

  return { ...query };
};
