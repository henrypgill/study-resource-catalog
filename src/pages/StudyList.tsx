import { AbsoluteCenter, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import Header from "../components/Header";
import ResourceStudyList from "../components/ResourceStudyList";
import { toTitleCase } from "../core/utils";
import { useAppSelector } from "../redux/store";
import { selectCurrentUser } from "../redux/userSlice";

function StudyList() {
  const user = useAppSelector(selectCurrentUser);

  const userName = useMemo(() => {
    if (!user) return;
    return toTitleCase(user.name);
  }, [user]);

  return (
    <>
      <Header title={!user ? "Study List" : `${userName}'s Study List`} />
      {!user ? (
        <AbsoluteCenter>
          <Heading>Please Log In!</Heading>
        </AbsoluteCenter>
      ) : (
        <ResourceStudyList />
      )}
    </>
  );
}

export default StudyList;
