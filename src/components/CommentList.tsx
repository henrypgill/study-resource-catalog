import { VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useResourceComments } from "../hooks/resourcesAPI";
import CommentCard from "./CommentCard";

function CommentList() {
  const { id: resourceId } = useParams<{ id: string }>();
  const {
    query: { data },
  } = useResourceComments(resourceId);

  return (
    <VStack height="100%" width="100%" overflowY="scroll" padding={3} gap={3}>
      {data?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </VStack>
  );
}

export default CommentList;
