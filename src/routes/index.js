import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
// Páginas
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/landingpage" component={LandingPage} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
