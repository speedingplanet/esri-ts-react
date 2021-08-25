import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUser';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsers';
import { User } from '@speedingplanet/rest-server';

export type UserProfile = Pick<User, 'displayName' | 'address' | 'userType'>;

export default function UsersView(): JSX.Element {
  const handleSearchDisplayName = ( displayName: string ) => {
    console.log( `UsersView: Searching on "${displayName}"` );
  };

  const handleCreateUser = ( user: UserProfile ) => {
    console.log(
      // eslint-disable-next-line max-len
      `Creating a user ${user.displayName} who lives in ${user.address.city}, ${user.address.state}`,
    );
  };

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
                <Link to="/users/find">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users/browse">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users/add">
        <AddUser createUser={handleCreateUser} />
      </Route>
      <Route path="/users/find">
        <FindUsers searchDisplayName={handleSearchDisplayName} />
      </Route>
      <Route path="/users/browse">
        <BrowseUsers />
      </Route>
    </> /* </React.Fragment> */
  );
}
