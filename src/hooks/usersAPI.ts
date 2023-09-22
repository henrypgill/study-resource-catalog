import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteFromUserStudyList,
  getUserStudyList,
  getUsers,
  postToUserStudyList,
} from "../core/requests/users";

export const useUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: Infinity,
  });

  return { ...query };
};

export const useUserStudyList = (userId: number | string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["studyList", userId],
    queryFn: () => getUserStudyList(userId),
    staleTime: Infinity,
  });

  const post = useMutation({
    mutationFn: postToUserStudyList,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["studyList", userId] }),
  });

  const remove = useMutation({
    mutationFn: deleteFromUserStudyList,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["studyList", userId] }),
  });

  return { query, post, remove };
};
