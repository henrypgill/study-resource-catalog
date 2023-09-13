import {
  AbsoluteCenter,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loading from "../components/Loading";
import PageLink from "../components/PageLink";
import ToggleTheme from "../components/ToggleTheme";
import { useResources } from "../hooks/resourcesAPI";

function Login() {
  const { data, isLoading } = useResources();

  // show loading component during inital load
  if (isLoading) return <Loading />;

  return (
    <AbsoluteCenter>
      <VStack gap={10}>
        <Heading>LOGIN PAGE</Heading>
        <ToggleTheme />
        <PageLink page="/">HOME</PageLink>

        {/* example using the data */}
        <HStack>
          {data?.map((resource, index) => (
            <Text key={index}>{resource}</Text>
          ))}
        </HStack>
      </VStack>
    </AbsoluteCenter>
  );
}

export default Login;
