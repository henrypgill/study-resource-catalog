import { Box } from "@chakra-ui/react";

interface TagCardProps {
  name: string;
}

function TagCard({ name }: TagCardProps) {
  return (
    <Box padding={1} bg="teal.700" borderRadius={10}>
      {name}
    </Box>
  );
}

export default TagCard;
