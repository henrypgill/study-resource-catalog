import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Resource } from "../core/requests/resources";
import { timeFromNow } from "../core/utils";
import PageLink from "./PageLink";
import ResourceTagList from "./ResourceTagList";

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card minH="20em" align="center" variant="filled">
      <PageLink page={`/resource/${resource.id}`}>
        <CardHeader as={VStack} bg="cyan.800" borderTopRadius="6px">
          <Heading size="md">{resource.title}</Heading>
        </CardHeader>
      </PageLink>
      <Divider />
      <CardBody>
        <Text>{resource.description}</Text>
      </CardBody>
      <CardFooter>
        <ResourceTagList tags={resource.tags} />
      </CardFooter>
      <Divider />
      <HStack width="100%" padding={2} justifyContent="space-between">
        <Heading size="sm">{resource.author_name}</Heading>
        <Text color="gray">{timeFromNow(resource.created_at)}</Text>
      </HStack>
    </Card>
  );
}

export default ResourceCard;
