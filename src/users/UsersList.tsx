import React, { ReactElement } from 'react';
import { User } from '@speedingplanet/rest-server';

/*
TODO List:
Take users, render into the table
Render the following fields: displayName, email, address.city, address.state
Extra challenge: click on a table header to sort
Extra extra challenge: click on the same header, to REVERSE the sort
(Maybe lodash.orderBy will help here)


Table reference:
<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>

*/

interface Props {
  users: User[];
}

export default function UsersList( { users }: Props ): ReactElement {
  // table.table.table-striped.table-hover
  return (
    <>
      <h4>Users List</h4>
      <table className="table table-striped table-hover"></table>
    </>
  );
}
