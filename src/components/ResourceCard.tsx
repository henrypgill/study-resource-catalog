import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { Resource } from "../core/requests/resources";
import ResourceTagList from "./ResourceTagList";

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  const handleClick = () => {
    alert("Redirect to single view not implemented");
  };

  return (
    <Card
      minH="20em"
      as="button"
      onClick={handleClick}
      align="center"
      variant="filled"
    >
      <CardHeader>
        <Heading size="md">{resource.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{resource.description}</Text>
      </CardBody>
      <CardFooter>
        <ResourceTagList tags={resource.tags} />
      </CardFooter>
      <Divider />
      <HStack width="100%" padding={2} justifyContent="space-between">
        <Heading size="sm">{resource.author_name}</Heading>
        <Text color="gray">{moment.utc(resource.created_at).fromNow()}</Text>
      </HStack>
    </Card>
  );
}

export default ResourceCard;
