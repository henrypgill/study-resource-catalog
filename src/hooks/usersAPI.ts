import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../core/requests/users";

export const useUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    initialData: [],
  });

  return { ...query };
};
