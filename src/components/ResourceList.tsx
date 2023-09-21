import { Box, SimpleGrid } from "@chakra-ui/react";
import { useMemo } from "react";
import {
  combineFilters,
  searchDescription,
  searchTags,
  searchTitle,
  sortByCreatedAt,
} from "../core/utils";
import { useResources } from "../hooks/resourcesAPI";
import { selectSearch, selectTags } from "../redux/filterSlice";
import { useAppSelector } from "../redux/store";
import ResourceCard from "./ResourceCard";

function ResourceList() {
  const {
    query: { data },
  } = useResources();
  const search = useAppSelector(selectSearch);
  const selectedTags = useAppSelector(selectTags);

  const resources = useMemo(() => {
    const filterTitle = searchTitle(search);
    const filterDescription = searchDescription(search);

    const filterText = combineFilters(filterTitle, filterDescription);
    const filterTags = searchTags(selectedTags);

    return data.filter(filterText).filter(filterTags).sort(sortByCreatedAt);
  }, [data, search, selectedTags]);

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
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ResourceList;
