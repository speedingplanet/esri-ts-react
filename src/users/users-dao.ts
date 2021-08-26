import { User } from '@speedingplanet/rest-server';
import { UserProfile } from './UsersViewContext';

const baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

function fetchUsers() {
  return fetch( baseUrl )
    .then( ( response ) => response.json() )
    .catch( ( err ) => console.error( 'Something went wrong: ', err ) );
}

function addUser( user: UserProfile ) {
  return fetch( baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( user ),
  } ).then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    } else {
      throw new Error( `Bad response: ${response.status}` );
    }
  } );
}

const dao = {
  fetchUsers,
  addUser,
};

export default dao;
