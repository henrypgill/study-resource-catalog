import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
