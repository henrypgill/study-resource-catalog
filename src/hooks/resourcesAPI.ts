import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments, postComment } from "../core/requests/comments";
import { getLikes } from "../core/requests/likes";
import {
  getResourceDetail,
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
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["resources"] }),
    onError: () => alert("Error submitting resource."),
  });

  return { query, mutation };
};

export const useTags = () => {
  const query = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
    staleTime: Infinity,
  });

  return query;
};

export const useResourceDetail = (id: number | string) => {
  const query = useQuery({
    queryKey: ["resource", "detail", id],
    queryFn: () => getResourceDetail(id),
  });

  return query;
};

export const useResourceLikes = (resourceId: number | string) => {
  const query = useQuery({
    queryKey: ["resource", "detail", "likes", resourceId],
    queryFn: () => getLikes(resourceId),
  });

  return query;
};

export const useResourceComments = (resourceId: number | string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["resource", "detail", "comments", resourceId],
    queryFn: () => getComments(resourceId),
  });

  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["resource", "detail", "comments", resourceId],
      }),
    onError: () => alert("Error sending comment."),
  });

  return { query, mutation };
};
