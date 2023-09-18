import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getResources,
  getTags,
  postResource,
} from "../core/requests/resources";

export const useResources = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
    initialData: [],
  });

  const mutation = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
    },
  });

  return { ...query, mutation };
};

export const useTags = () => {
  const query = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
    initialData: [],
  });

  return { ...query };
};
