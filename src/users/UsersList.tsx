/*
When any header is clicked, sortUsers is called which is part
of the interface of listProps - this makes a call up to the parent
UsersView to handle the sorting of users (handleSortUsers) - this
function decides on the sort type for the users, which gets passed
back down to the child (UsersList), is passed into UsersList through
props and since sortConfig.sortField will not contain a field, displayUsers
will be sorted based on the sortConfig.lastSortDirection on the 
sortConfig.sortField, returning the users sorted in the correct way.
*/

import React, { ReactElement } from 'react';
import { User } from '@speedingplanet/rest-server';
import { orderBy } from 'lodash';
import { SortConfig } from './UsersView';

interface listProps {
  users: User[];
  sortConfig: SortConfig;
  sortUsers: ( sortField: string ) => void;
}

export const UsersList = ( {
  users,
  sortConfig,
  sortUsers,
}: listProps ): ReactElement => {
  let displayUsers = users;

  if ( sortConfig.sortField ) {
    displayUsers = orderBy(
      users,
      sortConfig.sortField,
      sortConfig.lastSortDirection,
    );
  }

  return (
    <>
      <h4>Users List</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={() => sortUsers( 'displayName' )}>Name</th>
            <th onClick={() => sortUsers( 'email' )}>Email</th>
            <th onClick={() => sortUsers( 'address.city' )}>City</th>
            <th onClick={() => sortUsers( 'address.state' )}>State</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map( ( user ) => (
            <tr key={user.id}>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.state}</td>
            </tr>
          ) )}
        </tbody>
      </table>
    </>
  );
};
