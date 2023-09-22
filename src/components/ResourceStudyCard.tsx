import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Resource } from "../core/requests/resources";
import { User } from "../core/requests/users";
import { timeFromNow } from "../core/utils";
import { useUserStudyList } from "../hooks/usersAPI";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";
import PageLink from "./PageLink";

interface ResourceCardProps {
  resource: Resource;
}

function ResourceStudyCard({ resource }: ResourceCardProps) {
  const user = useAppSelector(selectCurrentUser) as User;

  const {
    query: { isFetching },
    remove,
  } = useUserStudyList(user.id);

  const handleRemove = () => {
    remove.mutate({ userId: user.id, resourceId: resource.id });
  };

  return (
    <Card align="center" variant="filled">
      <PageLink page={`/resource/${resource.id}`}>
        <CardHeader as={VStack} bg="cyan.800" borderTopRadius="6px">
          <Heading size="md">{resource.title}</Heading>
        </CardHeader>
      </PageLink>
      <Divider />
      <CardBody>
        <Text>{resource.description}</Text>
      </CardBody>
      <Divider />
      <HStack width="100%" justifyContent="space-between" padding={2}>
        <Button
          isDisabled={isFetching}
          colorScheme="red"
          onClick={handleRemove}
        >
          Remove
        </Button>
        <Text alignSelf="flex-end" color="gray">
          {timeFromNow(resource.created_at)}
        </Text>
      </HStack>
    </Card>
  );
}

export default ResourceStudyCard;
