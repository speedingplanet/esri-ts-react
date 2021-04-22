import { User } from '@speedingplanet/rest-server';
import React, { ReactElement } from 'react';

interface Props {
  user: User[];
}

export const UserDetail = ( props: Props ): ReactElement => {
  return <h4>User Details</h4>;
};
