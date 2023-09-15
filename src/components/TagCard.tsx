import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import { ForwardedRef } from "react";

const TagCard = forwardRef<BoxProps, "div">(TagCardWithProps);

function TagCardWithProps(props: BoxProps, ref: ForwardedRef<null>) {
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
    />
  );
}

export default TagCard;
