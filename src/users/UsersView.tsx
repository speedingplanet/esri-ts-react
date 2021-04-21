import React from 'react';
import { users } from '@speedingplanet/rest-server';
import UsersList from './UsersList';

export default function UsersView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Users</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersList users={users} />
        </div>
      </div>
    </section>
  );
}
