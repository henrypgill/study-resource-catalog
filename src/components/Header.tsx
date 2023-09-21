import {
  AbsoluteCenter,
  Button,
  Divider,
  HStack,
  Heading,
} from "@chakra-ui/react";
import LoginLogout from "./LoginLogout";
import PageLink from "./PageLink";
import ToggleTheme from "./ToggleTheme";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const user = useAppSelector(selectCurrentUser);

  return (
    <header>
      <HStack padding={3} justifyContent="space-between">
        <HStack justifyContent="flex-end">
          <PageLink page="/" width="max-content">
            <Button>HOME</Button>
          </PageLink>
          {user && (
            <PageLink page="/study-list" width="max-content">
              <Button>Study List</Button>
            </PageLink>
          )}
        </HStack>
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
