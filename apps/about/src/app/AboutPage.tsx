import React from "react";
import { MemoryRouter, Link, Route, Switch } from "react-router-dom";
import SubRoute1 from './SubRoute1';
import SubRoute2 from './SubRoute2';

const TodoPage = React.lazy(() => import("app_todo/TodoPage"));

export default function AboutPage() {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path='/'>
          <p>Hi, I m a PoC-Dashboard-Box</p>
          <p>You can navigate among these two MFE routes:</p>
          <div>
            <ul>
              <li><Link to='/sub-route-1'>Sub Route 1</Link></li>
              <li><Link to='/sub-route-2'>Sub Route 2</Link></li>
              <li><Link to='/todo-list'>(External) Todo List</Link></li>
            </ul>
            <hr />
          </div>
        </Route>
        <Route path='/sub-route-1'>
          <SubRoute1/>
        </Route>
        <Route path='/sub-route-2'>
          <SubRoute2/>
        </Route>
        <Route path='/todo-list'>
          <h4>This component came from another MFE</h4>
          <React.Suspense fallback="Loading">
            <TodoPage/>
          </React.Suspense>
          <Link to="/">Back</Link>
        </Route>
      </Switch>
    </MemoryRouter>
  );
}
