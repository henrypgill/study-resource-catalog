import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
