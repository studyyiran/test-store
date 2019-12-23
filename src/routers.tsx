import React from "react";
import {
  Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerConfig } from "./routerConfig";
import { TestUseMemo, TestUseMemoContextProvider } from "./pages/useMemo";
import { ShareComponent } from "./share/share";
const myHistory = createBrowserHistory();
const current = '/gate-box-2'

export default function Routers() {
  return (
    <BrowserRouter>
      <ShareComponent>
        <Switch>
          {routerConfig.map(item => {
            const { path, Component } = item;
            return (
              <Route
                key={path}
                path={path}
                component={layoutHoc(Component)}
              ></Route>
            );
          })}
          <Redirect to={current} />
        </Switch>
      </ShareComponent>
    </BrowserRouter>
  );
}

function layoutHoc(Component: any) {
  return (props: any) => {
    return (
      <TestUseMemoContextProvider>
        v12.23
        <Component {...props} />
      </TestUseMemoContextProvider>
    );
  };
}
