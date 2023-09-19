import { Button, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { toTitleCase } from "../core/utils";
import { useUsers } from "../hooks/usersAPI";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCurrentUser, loginUser, logoutUser } from "../redux/userSlice";

function LoginLogout() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const { data } = useUsers();

  const handleOnLogin = (e: ChangeEvent<HTMLSelectElement>) => {
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
      {data?.map((user, index) => (
        <option key={user.id} value={index}>
          {toTitleCase(user.name)}
        </option>
      ))}
    </Select>
  );
}

export default LoginLogout;
