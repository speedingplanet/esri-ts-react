import React, { ReactElement } from 'react';
import { User } from '@speedingplanet/rest-server';
import DataTable, { ColumnConfig } from '../components/DataTable';
import { useHistory } from 'react-router-dom';

interface Props {
  users: User[];
  columns: ColumnConfig[];
}

export default function UsersDataTable( {
  users,
  columns,
}: Props ): ReactElement {
  const history = useHistory();

  const handleSelectRow = ( user: User ) => {
    let url = `/users/details/${user.id}`;
    history.push( url );
  };

  return (
    <section>
      <h4>Users List</h4>
      <DataTable data={users} columns={columns} selectRow={handleSelectRow} />
    </section>
  );
}
