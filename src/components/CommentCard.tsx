import { Card, CardBody, CardFooter, Text, VStack } from "@chakra-ui/react";
import { Comment } from "../core/requests/comments";
import { timeFromNow, toTitleCase } from "../core/utils";

interface CommentCardProps {
  comment: Comment;
}

function CommentCard({ comment }: CommentCardProps) {
  return (
    <VStack as={Card} width="100%" bg="cyan.900">
      <CardBody alignSelf="flex-start">
        <Text fontSize="lg">{comment.content}</Text>
      </CardBody>
      <CardFooter
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignSelf="flex-end"
      >
        <Text fontSize="sm">{toTitleCase(comment.user.name)}</Text>
        <Text fontSize="sm">{timeFromNow(comment.created_at)}</Text>
      </CardFooter>
    </VStack>
  );
}

export default CommentCard;
