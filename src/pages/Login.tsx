import { AbsoluteCenter, Heading, VStack } from "@chakra-ui/react";
import PageLink from "../components/PageLink";
import ToggleTheme from "../components/ToggleTheme";

function Login() {
  return (
    <AbsoluteCenter>
      <VStack gap={10}>
        <Heading>LOGIN PAGE</Heading>
        <ToggleTheme />
        <PageLink page="/">HOME</PageLink>
      </VStack>
    </AbsoluteCenter>
  );
}

export default Login;
