import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link, Text } from "@chakra-ui/react";

interface URLButtonProps {
  link: string;
}

function URLButton({ link }: URLButtonProps) {
  try {
    const url = new URL(link);
    return (
      <Link href={url.href} isExternal>
        <Button rightIcon={<ExternalLinkIcon />}>{url.hostname}</Button>
      </Link>
    );
  } catch (e) {
    console.error("Invalid URL in resource object.");
    return <Text color="red">Invalid URL</Text>;
  }
}

export default URLButton;
