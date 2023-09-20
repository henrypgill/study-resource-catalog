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
  const { data, isLoading, isFetching } = useResourceLikes(resourceId);

  const isLiked = useMemo(
    () => data?.some((like) => like.user_id === user?.id),
    [data, user]
  );

  const handleLike = () => {
    // TODO: Add mutation to toggle a user
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
      overflowY={{ md: "auto", lg: "scroll" }}
    >
      <Text fontSize="xl">Likes: {data?.length}</Text>
      {user && (
        <Button
          isDisabled={isFetching}
          onClick={handleLike}
          rightIcon={isLiked ? <CloseIcon /> : <CheckIcon />}
        >
          {isLiked ? "Remove Like" : "Add Like"}
        </Button>
      )}
    </HStack>
  );
}

export default UserLikes;
