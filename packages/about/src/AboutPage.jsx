import React, { useContext } from "react";
import { MemoryRouter, Link, Route, Switch } from "react-router-dom";
import SubRoute1 from './SubRoute1';
import SubRoute2 from './SubRoute2';
import { AuthContext } from "@mfes/shared-library";

const TodoMFE = React.lazy(() => import("app_todo/TodoMFE"));

export default function AboutPage() {
  const {authState} = useContext(AuthContext);

  return (
    <MemoryRouter>
      <Switch>
        <Route exact path='/'>
          <p>Hi <strong>{authState.user}</strong>, I m a PoC-Dashboard-Box</p>
          <p> Here are your logged user info:</p>
          <p><strong>Name</strong>: {authState.firstName} {authState.lastName}</p>
          <p><strong>Email</strong>: {authState.email} </p>
          <p><strong>Role</strong>: {authState.role} </p>
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
          <React.Suspense fallback={<div>Loading...</div>}>
            <TodoMFE/>
          </React.Suspense>
          <Link to="/">Back</Link>
        </Route>                
      </Switch>
    </MemoryRouter>
  );
}
