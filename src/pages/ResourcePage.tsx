import { SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ResourceDataTable from "../components/ResourceDataTable";
import ResourceUserData from "../components/ResourceUserData";
import { useResourceDetail } from "../hooks/resourcesAPI";

function ResourcePage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useResourceDetail(id);

  return (
    <>
      {isLoading && <Loading />}
      <Header title="RESOURCE" />
      {data && (
        <SimpleGrid templateColumns={{ md: "1fr", lg: "1fr 2fr" }}>
          <ResourceUserData />
          <ResourceDataTable resource={data} />
        </SimpleGrid>
      )}
    </>
  );
}

export default ResourcePage;
