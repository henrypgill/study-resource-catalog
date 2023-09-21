import { Link as ChakraLink } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

interface PageLinkProps {
  page: string;
  width?: string;
  children: ReactNode;
}

function PageLink({ page, width, children }: PageLinkProps) {
  return (
    <ChakraLink as={ReactRouterLink} to={page} width={width ?? "100%"}>
      {children}
    </ChakraLink>
  );
}

export default PageLink;
