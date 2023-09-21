import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useResourceLikes } from "../hooks/resourcesAPI";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

function UserLikes() {
  const { id: resourceId } = useParams<{ id: string }>();
  const user = useAppSelector(selectCurrentUser);
  const {
    query: { data, isLoading, isFetching },
    mutation,
  } = useResourceLikes(resourceId);

  const isLiked = useMemo(
    () => data?.some((like) => like.user_id === user?.id),
    [data, user]
  );

  const handleLike = () => {
    if (!user) return;
    mutation.mutate({ resourceId, userId: user.id });
  };

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      scrollMargin={10}
      paddingRight="2em"
      paddingLeft="2em"
      width="100%"
    >
      <Text fontSize="xl">Likes: {data?.length}</Text>
      {user && (
        <Button
          isDisabled={isFetching}
          onClick={handleLike}
          padding={6}
          rightIcon={isLiked ? <CloseIcon /> : <CheckIcon />}
        >
          {isLiked ? "Remove Like" : "Add Like"}
        </Button>
      )}
    </HStack>
  );
}

export default UserLikes;
