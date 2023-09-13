import { SimpleGrid } from "@chakra-ui/react";
import { useResources } from "../hooks/resourcesAPI";
import ResourceCard from "./ResourceCard";

function ResourceList() {
  const { data } = useResources();

  return (
    <SimpleGrid minChildWidth="20em" spacing="2em" padding="2em">
      {data?.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </SimpleGrid>
  );
}

export default ResourceList;
