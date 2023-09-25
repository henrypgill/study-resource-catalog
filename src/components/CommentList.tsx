import { VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useResourceComments } from "../hooks/resourcesAPI";
import CommentCard from "./CommentCard";
import { useMemo } from "react";
import { sortByCreatedAt } from "../core/utils";

function CommentList() {
  const { id: resourceId } = useParams<{ id: string }>();
  const {
    query: { data },
  } = useResourceComments(resourceId);

  const comments = useMemo(() => data?.sort(sortByCreatedAt), [data]);

  return (
    <VStack height="100%" width="100%" overflowY="scroll" padding={3} gap={3}>
      {comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </VStack>
  );
}

export default CommentList;
