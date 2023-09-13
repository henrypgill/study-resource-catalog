import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { Resource } from "../core/requests/resources";

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  const handleClick = () => {
    alert("Redirect to single view not implemented");
  };

  return (
    <Card as="button" onClick={handleClick} align="center" variant="filled">
      <CardHeader>
        <Heading size="md">{resource.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{resource.description}</Text>
      </CardBody>
      <Divider />
      <CardFooter>{JSON.stringify(resource.tags)}</CardFooter>
      <Text alignSelf="flex-end" padding={2} color="gray">
        {moment(resource.created_at).fromNow()}
      </Text>
    </Card>
  );
}

export default ResourceCard;
