import React from 'react';
import { users } from '@speedingplanet/rest-server';
import UsersGrid, { Column } from './UsersGrid';

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

const columnConfig: Column[] = [
  {
    field: 'displayName',
    label: 'Display Name',
  },
  {
    field: 'userType',
    label: 'Type',
  },
  {
    field: 'address.city',
    label: 'City',
  },
  {
    field: 'address.state',
    label: 'State',
  },
];

const BrowseUsers = () => {
  return <UsersGrid users={users} columns={columnConfig} />;
};

export default BrowseUsers;
