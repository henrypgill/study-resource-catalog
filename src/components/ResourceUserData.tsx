import { Card, Divider, VStack } from "@chakra-ui/react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import UserLikes from "./UserLikes";

function ResourceUserData() {
  return (
    <VStack
      justifyContent="space-between"
      as={Card}
      margin="2em"
      padding="2em"
      height="85vh"
      width="90%"
    >
      <VStack width="100%" height="100%">
        <UserLikes />
        <Divider paddingTop={3} paddingBottom={3} />
        <CreateComment />
        <Divider paddingBottom={3} />
        <CommentList />
      </VStack>
    </VStack>
  );
}

export default ResourceUserData;
