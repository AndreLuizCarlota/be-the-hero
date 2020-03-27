import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./screens/Logon";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import NewIncident from "./screens/NewIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" exact component={Register} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/incidents/new" exact component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
