import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

function UserLikes() {
  //@ts-ignore
  const { id: resourceId } = useParams<{ id: string }>();
  //@ts-ignore
  const user = useAppSelector(selectCurrentUser);

  // TODO: fetch like count
  const [likes, setLikes] = useState(5);
  const [isLiked, setIsLiked] = useState(false);

  // TODO: temp state until fetching
  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <HStack
      justifyContent="space-between"
      alignItems="flex-start"
      height="85vh"
      scrollMargin={10}
      marginTop="2em"
      marginBottom="2em"
      paddingRight="2em"
      paddingLeft="2em"
      overflowY={{ md: "auto", lg: "scroll" }}
    >
      <Text>Likes: {likes}</Text>
      <Button
        onClick={handleLike}
        rightIcon={isLiked ? <CloseIcon /> : <CheckIcon />}
      >
        {isLiked ? "Remove Like" : "Add Like"}
      </Button>
    </HStack>
  );
}

export default UserLikes;
