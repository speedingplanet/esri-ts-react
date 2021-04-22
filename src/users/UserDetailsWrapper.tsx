import React, { ReactElement, useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import { useParams } from 'react-router-dom';
import { dao, User } from '@speedingplanet/rest-server';

type UserParams = { userId: string };

export default function UserDetailsWrapper(): ReactElement {
  const [ user, setUser ] = useState<User | undefined>();
  let { userId: userIdParam } = useParams<UserParams>();

  useEffect( () => {
    dao.findUserById( userIdParam ).then( ( { data: user } ) => setUser( user ) );
  }, [ userIdParam ] );

  return (
    <>{user ? <UserDetails user={user} /> : <p>User not found (yet?)</p>}</>
  );
}
