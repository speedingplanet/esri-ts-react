import { User } from '@speedingplanet/rest-server';
import React, { ReactElement } from 'react';
import BootstrapCard from '../components/BootstrapCard';

interface Props {
  user: User;
}

export default function UserDetails( { user }: Props ): ReactElement {
  return (
    <section>
      <BootstrapCard
        title={`User details for ${user.displayName}`}
        headerClasses="bg-primary text-light"
      >
        <ul className="list-group">
          <li className="list-group-item">{user.address.street}</li>
          <li className="list-group-item">
            {user.address.city}, {user.address.state} {user.address.postalCode}
          </li>
          <li className="list-group-item">Last updated: {user.lastUpdated}</li>
          <li className="list-group-item">
            Active? {user.active ? 'true' : 'false'}
          </li>
        </ul>
      </BootstrapCard>
    </section>
  );
}
