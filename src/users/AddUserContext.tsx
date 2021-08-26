import React, { useContext } from 'react';
import AddUser from './AddUser';
import { UsersContext } from './UsersViewContext';

const AddUserContext = () => {
  const context = useContext( UsersContext );
  return (
    <>
      <AddUser
        createUser={( user ) => context.dispatch( 'ADD_USER', user )}
        buttonDisabled={context.isLoading ?? false}
      />
    </>
  );
};

export default AddUserContext;
