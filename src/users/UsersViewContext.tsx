import React, { useReducer } from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUserContext';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsersContext';
import { User, users } from '@speedingplanet/rest-server';
import { AnyAction } from '@reduxjs/toolkit';

export type UserProfile = Pick<User, 'displayName' | 'address' | 'userType'>;

// export const MyContext = React.createContext( null );

interface UsersContextProps {
  dispatch: ( field: string, value: any ) => void;
  users: User[];
  searchTerm: string;
}

export const UsersContext = React.createContext<UsersContextProps>( {
  users: [],
  searchTerm: '',
  dispatch: () => null,
} );

function reducer( state: UsersContextProps, action: AnyAction ) {
  switch ( action.type ) {
  case 'ADD_USER':
    return { ...state, users: [ ...users, action.payload ] };
  case 'FIND_USERS':
    return { ...state, searchTerm: action.payload };
  default:
    throw new Error( 'Missed case!' );
  }
}

const actionCreator = ( type: string, payload: any ) => ( {
  type,
  payload,
} );

const initialState: UsersContextProps = {
  users,
  searchTerm: '',
  dispatch: () => null,
};

export default function UsersViewContext(): JSX.Element {
  const [ state, dispatch ] = useReducer( reducer, initialState );
  console.log( 'State is: ', state );

  const handleSearchDisplayName = ( displayName: string ) => {
    console.log( `UsersView: Searching on "${displayName}"` );
  };

  const definedContext: UsersContextProps = {
    users: state.users,
    searchTerm: state.searchTerm,
    dispatch: ( field, value ) => dispatch( actionCreator( field, value ) ),
  };

  return (
    <UsersContext.Provider value={definedContext}>
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
                <Link to="/users-context/add">Add a user</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users-context/find">Find users</Link> |
              </li>
              <li className="list-inline-item">
                <Link to="/users-context/browse">Browse users</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Route path="/users-context/add">
        <AddUser />
      </Route>
      <Route path="/users-context/find">
        <FindUsers />
      </Route>
      <Route path="/users-context/browse">
        <BrowseUsers />
      </Route>
    </UsersContext.Provider>
  );
}
