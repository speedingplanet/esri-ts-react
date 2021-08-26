import React, { useReducer } from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUserContext';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsers';
import { User } from '@speedingplanet/rest-server';
import { AnyAction } from '@reduxjs/toolkit';

export type UserProfile = Pick<User, 'displayName' | 'address' | 'userType'>;

const initialState: UserProfile = {
  displayName: '',
  userType: 'person',
  address: {
    street: '',
    city: '',
    state: '',
    postalCode: '',
  },
};

export const UsersContext = React.createContext<{
  user: UserProfile;
  dispatch: ( field: string, value: string ) => void;
}>( { user: initialState, dispatch: () => null } );

function reducer( state: UserProfile, action: AnyAction ) {
  switch ( action.type ) {
  case 'displayName':
  case 'userType':
    return { ...state, [action.type]: action.payload };
  case 'street':
  case 'city':
  case 'state':
  case 'postalCode':
    return {
      ...state,
      address: { ...state.address, [action.type]: action.payload },
    };
  default:
    throw new Error( 'Missed case!' );
  }
}

const actionCreator = ( type: string, payload: string ) => ( {
  type,
  payload,
} );

export default function UsersView(): JSX.Element {
  const [ state, dispatch ] = useReducer( reducer, initialState );

  const handleSearchDisplayName = ( displayName: string ) => {
    console.log( `UsersView: Searching on "${displayName}"` );
  };

  return (
    <UsersContext.Provider
      value={{
        user: state,
        dispatch: ( field, value ) => dispatch( actionCreator( field, value ) ),
      }}
    >
      <section>
        <div className="row">
          <div className="col">
            <h2>Users</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/users/add">Add a user</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users/find">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users/browse">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users/add">
        <AddUser />
      </Route>
      <Route path="/users/find">
        <FindUsers searchDisplayName={handleSearchDisplayName} />
      </Route>
      <Route path="/users/browse">
        <BrowseUsers />
      </Route>
    </UsersContext.Provider>
  );
}
