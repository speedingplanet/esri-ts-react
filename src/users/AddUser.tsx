import React, { useState } from 'react';
import { UserProfile } from './UsersView';
import lodashSet from 'lodash/set';
// import { set as lodashSet } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Country {
  USA,
  CAN,
  UK,
  MX,
}

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

interface AddUserProps {
  createUser: ( user: UserProfile ) => void;
  buttonDisabled: boolean;
}

const AddUser = ( { createUser, buttonDisabled }: AddUserProps ): JSX.Element => {
  const [ formState, setFormState ] = useState<UserProfile>( initialState );
  const [ userAdded, setUserAdded ] = useState( false );

  const updateFormState: React.FormEventHandler<
  HTMLInputElement | HTMLSelectElement
  > = ( event ) => {
    const field = event.currentTarget;
    const updatedState = { ...formState };
    lodashSet( updatedState, field.name, field.value );
    if ( userAdded ) setUserAdded( false );
    setFormState( updatedState );
  };

  const handleClick = () => {
    createUser( formState );
    setUserAdded( true );
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = ( event ) => {
    console.log( 'Runs when the submit EVENT happens' );
    const data = new FormData( event.currentTarget );

    // @ts-expect-error
    for ( let [ key, value ] of data.entries() ) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log( `${key} : ${value}` );
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">
          Display Name
        </label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          name="displayName"
          value={formState.displayName}
          onInput={updateFormState}
        />
      </div>
      <TextInput
        fieldValue={formState.address.street}
        changeInput={updateFormState}
        label="Street"
        fieldName="address.street"
      />
      <TextInput
        fieldValue={formState.address.city}
        changeInput={updateFormState}
        label="City"
        fieldName="address.city"
      />
      <TextInput
        fieldValue={formState.address.state}
        changeInput={updateFormState}
        label="State"
        fieldName="address.state"
      />
      <TextInput
        fieldValue={formState.address.postalCode}
        changeInput={updateFormState}
        label="Postal Code"
        fieldName="address.postalCode"
      />
      {/*
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={formState.country}
          name="country"
          onChange={updateFormState}
        >
          <option value="">Choose a country</option>
          <option value="USA">United States</option>
          <option value="CAN">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="MX">Mexico</option>
        </select>
      </div>
      */}
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            id="person"
            value="person"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="person">
            Person
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="userType"
            id="corporation"
            value="corporation"
          />
          <label className="form-check-label" htmlFor="corporation">
            Corporation
          </label>
        </div>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-success"
          type="submit"
          onClick={handleClick}
          disabled={buttonDisabled}
        >
          Add User
        </button>
      </div>
    </form>
  );
};

interface TextInputProps {
  label: string;
  fieldName: string;
  fieldType?: string;
  fieldValue: string;
  changeInput: React.FormEventHandler<HTMLInputElement>;
}

const TextInput = ( {
  fieldName,
  fieldType,
  label,
  fieldValue,
  changeInput,
}: TextInputProps ) => {
  return (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type={fieldType ?? 'text'}
        className="form-control"
        id={fieldName}
        name={fieldName}
        value={fieldValue}
        onInput={changeInput}
      />
    </div>
  );
};

export default AddUser;
