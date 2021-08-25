import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUser';

export default function UsersView(): JSX.Element {
  return (
    <>
      {/* <React.Fragment> */}
      <section>
        <div className="row">
          <div className="col">
            <h2>Users</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/users/add">Add a user</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users/add">
        <AddUser />
      </Route>
    </> /* </React.Fragment> */
  );
}
