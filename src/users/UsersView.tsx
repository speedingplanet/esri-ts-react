import React, { useState } from 'react';
import { users } from '@speedingplanet/rest-server';
import UsersList from './UsersList';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  sortField: string;
  lastSortField: string;
  lastSortDirection: SortDirection;
}

export default function UsersView(): JSX.Element {
  const [ sortConfig, setSortConfig ] = useState<SortConfig>( {
    sortField: '',
    lastSortField: '',
    lastSortDirection: 'asc',
  } );

  const handleSortUsers = ( sortField: string ) => {
    let lastSortDirection: SortDirection = 'asc';
    if (
      sortField === sortConfig.sortField &&
      sortConfig.lastSortDirection === 'asc'
    ) {
      lastSortDirection = 'desc';
    }

    setSortConfig( {
      sortField,
      lastSortField: sortConfig.sortField,
      lastSortDirection,
    } );
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Users</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersList
            users={users}
            sortConfig={sortConfig}
            sortUsers={handleSortUsers}
          />
        </div>
      </div>
    </section>
  );
}
