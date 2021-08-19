import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./Home";

const DashboardPage = React.lazy(() => import("app_dashboard/DashboardPage"));

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/dashboard'>
          <Link to="/">Logout</Link>
          <React.Suspense fallback="Loading">
            <DashboardPage/>
          </React.Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
