import { AbsoluteCenter, Heading, VStack } from "@chakra-ui/react";
import PageLink from "../components/PageLink";
import ToggleTheme from "../components/ToggleTheme";

function Home() {
  return (
    <AbsoluteCenter>
      <VStack gap={10}>
        <Heading>HOME PAGE</Heading>
        <ToggleTheme />
        <PageLink page="/login">LOGIN</PageLink>
      </VStack>
    </AbsoluteCenter>
  );
}

export default Home;
