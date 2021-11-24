import React from "react";
import {
  Router,
  Switch
} from "react-router";
import { createBrowserHistory } from "history";

import Public from "components/Layout/Public/PublicRoute";
import Home from "components/Public/Home";

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Public path={"/"} component={Home} />
    </Switch>
  </Router>

)

export const PATHNAME = {
  HOME: "/home",
};

export default Routes;