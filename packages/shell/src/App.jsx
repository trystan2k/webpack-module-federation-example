import React from "react";

const DashboardPage = React.lazy(() => import("app_dashboard/DashboardPage"));
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";

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
