import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { ResourceDetail } from "../core/requests/resources";
import URLButton from "./URLButton";
import { toTitleCase } from "../core/utils";

interface ResourceDataTableProps {
  resource: ResourceDetail;
}

function ResourceDataTable({ resource }: ResourceDataTableProps) {
  return (
    <TableContainer
      whiteSpace="pre-wrap"
      height="85vh"
      scrollMargin={10}
      marginTop="2em"
      marginBottom="2em"
      paddingRight="2em"
      paddingLeft="2em"
      overflowY={{ md: "auto", lg: "scroll" }}
    >
      <Table size="lg">
        <Tbody>
          <Tr>
            <Td>Title:</Td>
            <Td>{resource.title}</Td>
          </Tr>
          <Tr>
            <Td>Description:</Td>
            <Td>{resource.description}</Td>
          </Tr>
          <Tr>
            <Td>URL:</Td>
            <Td>
              <URLButton link={resource.url} />
            </Td>
          </Tr>
          <Tr>
            <Td>Recommendation:</Td>
            <Td>{resource.recommendation.recommendation_type}</Td>
          </Tr>
          <Tr>
            <Td>Notes:</Td>
            <Td>{resource.recommendation.content}</Td>
          </Tr>
          <Tr>
            <Td>Submitted By:</Td>
            <Td>{toTitleCase(resource.owner.name)}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ResourceDataTable;
