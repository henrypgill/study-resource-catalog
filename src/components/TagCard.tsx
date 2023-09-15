import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import { ForwardedRef } from "react";

interface TagCardProps extends BoxProps {
  name: string;
  onClick?: () => void;
}

const TagCard = forwardRef<TagCardProps, "div">(TagCardWithProps);

function TagCardWithProps(props: TagCardProps, ref: ForwardedRef<null>) {
  return (
    <Box
      ref={ref}
      paddingLeft={2}
      paddingRight={2}
      paddingTop={1}
      paddingBottom={1}
      bg="teal.500"
      borderRadius={10}
      {...props}
    >
      {props.name}
    </Box>
  );
}

export default TagCard;
