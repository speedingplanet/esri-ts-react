import React from 'react';
import { users } from '@speedingplanet/rest-server';

/*
<table className="table table-striped table-hover">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
*/

const BrowseUsers = () => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Display Name</th>
          <th>Type</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {users.map( ( user ) => (
          <tr key={user.id}>
            <td>{user.displayName}</td>
            <td>{user.userType}</td>
            <td>{user.address.city}</td>
            <td>{user.address.state}</td>
          </tr>
        ) )}
      </tbody>
    </table>
  );
};

export default BrowseUsers;
