import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ResourcePage from "../pages/ResourcePage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/resource/:id">
          <ResourcePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
