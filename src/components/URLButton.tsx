import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";

interface URLButtonProps {
  link: string;
}

function URLButton({ link }: URLButtonProps) {
  const url = new URL(link);

  return (
    <Link href={url.href} isExternal>
      <Button rightIcon={<ExternalLinkIcon />}>{url.hostname}</Button>
    </Link>
  );
}

export default URLButton;
