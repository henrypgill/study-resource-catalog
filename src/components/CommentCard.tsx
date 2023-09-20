import { Card, CardBody, CardFooter, VStack } from "@chakra-ui/react";
import moment from "moment";
import { Comment } from "../core/requests/comments";

interface CommentCardProps {
  comment: Comment;
}

function CommentCard({ comment }: CommentCardProps) {
  return (
    <VStack as={Card} width="100%" bg="cyan.900">
      <CardBody alignSelf="flex-start">{comment.content}</CardBody>
      <CardFooter alignSelf="flex-end">
        {moment(comment.created_at).fromNow()}
      </CardFooter>
    </VStack>
  );
}

export default CommentCard;
