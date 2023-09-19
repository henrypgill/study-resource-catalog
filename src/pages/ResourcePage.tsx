import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useResourceDetail } from "../hooks/resourcesAPI";

function ResourcePage() {
  const { id } = useParams<{ id: string }>();
  const query = useResourceDetail(id);

  console.log(query.data);

  return (
    <>
      <Header title="RESOURCE" />
    </>
  );
}

export default ResourcePage;
