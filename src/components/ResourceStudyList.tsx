import { Box, SimpleGrid } from "@chakra-ui/react";
import { User } from "../core/requests/users";
import { useUserStudyList } from "../hooks/usersAPI";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";
import ResourceStudyCard from "./ResourceStudyCard";

function ResourceStudyList() {
  const user = useAppSelector(selectCurrentUser) as User;

  const {
    query: { data },
  } = useUserStudyList(user.id);

  return (
    <Box
      height="85vh"
      scrollMargin={10}
      marginTop="2em"
      marginBottom="2em"
      paddingRight="2em"
      paddingLeft="2em"
      overflowY={{ md: "auto", lg: "scroll" }}
    >
      <SimpleGrid minChildWidth="20em" spacing="2em">
        {data?.map((resource) => (
          <ResourceStudyCard key={resource.id} resource={resource} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ResourceStudyList;
