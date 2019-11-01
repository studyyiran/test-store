import React from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerConfig } from "./routerConfig";
const myHistory = createBrowserHistory();
export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        {routerConfig.map(item => {
          const { path, Component } = item;
          return <Route path={path} component={Component}></Route>;
        })}
      </Switch>
    </BrowserRouter>
  );
}
