import { AbsoluteCenter, Heading, Spinner, VStack } from "@chakra-ui/react";

function Loading() {
  return (
    <AbsoluteCenter>
      <VStack gap={10}>
        <Spinner size={"xl"} />
        <Heading userSelect={"none"}>Loading...</Heading>
      </VStack>
    </AbsoluteCenter>
  );
}

export default Loading;
