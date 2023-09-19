import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ResourceDataTable from "../components/ResourceDataTable";
import { useResourceDetail } from "../hooks/resourcesAPI";

function ResourcePage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useResourceDetail(id);

  return (
    <>
      {isLoading && <Loading />}
      <Header title="RESOURCE" />
      {data && <ResourceDataTable resource={data} />}
    </>
  );
}

//  <Box>
//    {/* <Button size="lg"> */}
//    {/*   <Link href={data.url} isExternal> */}
//    {/*     Visit Resource */}
//    {/*   </Link> */}
//    {/* </Button> */}
//    <Heading>{data?.title}</Heading>
//    <Heading>{data?.description}</Heading>
//    <Heading size="sm">
//      Posted by {data && toTitleCase(data.owner_name)}
//    </Heading>
//    {/* TODO: Like & Comment Count */}
//    {/* TODO: Like Button */}
//  </Box>
//  <Box>
//    {/* TODO: Post Comment Input */}
//    {/* TODO: Comment List */}
//    {data?.comments.map((c) => (
//      <Heading key={c.id}>{c.content}</Heading> // TODO: Comment Card
//    ))}
//  </Box>

export default ResourcePage;
