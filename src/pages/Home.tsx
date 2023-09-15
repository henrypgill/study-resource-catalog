import { SimpleGrid } from "@chakra-ui/react";
import FilterContainer from "../components/FilterCard";
import Header from "../components/Header";
import ResourceList from "../components/ResourceList";

function Home() {
  return (
    <>
      <Header title="Home" />
      <SimpleGrid templateColumns={{ md: "1fr", lg: "1fr 3fr" }}>
        <FilterContainer />
        <ResourceList />
      </SimpleGrid>
    </>
  );
}

export default Home;
