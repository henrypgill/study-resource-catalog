import { Button, Select } from "@chakra-ui/react";
import { ChangeEvent, useMemo } from "react";
import { toTitleCase } from "../core/utils";
import { useUsers } from "../hooks/usersAPI";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { loginUser, logoutUser, selectCurrentUser } from "../redux/userSlice";

function LoginLogout() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const { data } = useUsers();

  const userNames = useMemo(() => {
    if (!data) return;
    return data.map((user) => ({ ...user, name: toTitleCase(user.name) }));
  }, [data]);

  const handleOnLogin = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!data) return;

    const selectedUser = data[parseInt(e.target.value)];
    dispatch(loginUser(selectedUser));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (currentUser !== undefined) {
    return (
      <Button onClick={handleLogout}>
        LOGOUT | {toTitleCase(currentUser.name)}
      </Button>
    );
  }

  return (
    <Select width="max-content" defaultValue="default" onChange={handleOnLogin}>
      <option disabled value="default">
        Select User
      </option>
      {userNames?.map((user, index) => (
        <option key={user.id} value={index}>
          {user.name}
        </option>
      ))}
    </Select>
  );
}

export default LoginLogout;
