import { Flex } from "@chakra-ui/react";
import TagCard from "./TagCard";
import { Tag } from "../core/requests/resources";

interface ResourceTagListProps {
  tags: Tag[];
}

function ResourceTagList({ tags }: ResourceTagListProps) {
  return (
    <Flex gap={3}>
      {tags.map((tag) => (
        <TagCard key={tag.id}>{tag.name}</TagCard>
      ))}
    </Flex>
  );
}

export default ResourceTagList;
