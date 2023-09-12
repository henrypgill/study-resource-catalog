import { useAppSelector } from "../redux/store";
import { selectUserId } from "../redux/userSlice";
import "../styles/App.css";

function App() {
  const userId = useAppSelector(selectUserId);

  return (
    <div className="App">
      <h1>app</h1>
      <p>user id is {userId}</p>
    </div>
  );
}

export default App;
