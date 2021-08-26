import React, { useContext } from 'react';
import UsersGrid, { Column } from './UsersGrid';
import { UsersContext } from './UsersViewContext';

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
  const context = useContext( UsersContext );
  return <UsersGrid users={context.users} columns={columnConfig} />;
};

export default BrowseUsers;
