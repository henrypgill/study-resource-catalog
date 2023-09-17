import {
  AbsoluteCenter,
  Button,
  Divider,
  HStack,
  Heading,
} from "@chakra-ui/react";
import PageLink from "./PageLink";
import ToggleTheme from "./ToggleTheme";
import LoginLogout from "./LoginLogout";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header>
      <HStack padding={3} justifyContent="space-between">
        <PageLink page="/">
          <Button>HOME</Button>
        </PageLink>
        <AbsoluteCenter axis="horizontal">
          <Heading>{title}</Heading>
        </AbsoluteCenter>
        <HStack justifyContent="flex-end">
          <LoginLogout />
          <ToggleTheme />
        </HStack>
      </HStack>
      <Divider />
    </header>
  );
}

export default Header;
