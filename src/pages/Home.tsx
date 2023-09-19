import { SimpleGrid } from "@chakra-ui/react";
import CreateResource from "../components/CreateResource";
import FilterContainer from "../components/FilterContainer";
import Header from "../components/Header";
import ResourceList from "../components/ResourceList";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

function Home() {
  const user = useAppSelector(selectCurrentUser);
  return (
    <>
      <Header title="Home" />
      <SimpleGrid templateColumns={{ md: "1fr", lg: "1fr 3fr" }}>
        <FilterContainer />
        <ResourceList />
      </SimpleGrid>
      {user && <CreateResource />}
    </>
  );
}

export default Home;
