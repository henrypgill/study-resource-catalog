import {
  Button,
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
import { useMemo } from "react";
import { Resource } from "../core/requests/resources";
import { timeFromNow } from "../core/utils";
import { useUserStudyList } from "../hooks/usersAPI";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";
import PageLink from "./PageLink";
import ResourceTagList from "./ResourceTagList";

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  const user = useAppSelector(selectCurrentUser);

  const {
    query: { data },
    post,
  } = useUserStudyList(user?.id ?? -1);

  const handleAdd = () => {
    if (!user) return;
    post.mutate({ userId: user.id, resourceId: resource.id });
  };

  const isOnlist = useMemo(() => {
    return data?.some((res) => res.id === resource.id);
  }, [data, resource]);

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
        <ResourceTagList tags={resource.tags ?? []} />
      </CardFooter>
      <Divider />
      <HStack width="100%" justifyContent="space-between" padding={2}>
        <Button
          isDisabled={isOnlist || !user}
          colorScheme="green"
          onClick={handleAdd}
        >
          Add
        </Button>
        <Text alignSelf="flex-end" color="gray">
          {timeFromNow(resource.created_at)}
        </Text>
      </HStack>
    </Card>
  );
}

export default ResourceCard;
