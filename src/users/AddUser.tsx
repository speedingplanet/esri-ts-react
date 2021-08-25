import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Country {
  USA,
  CAN,
  UK,
  MX,
}

type CountryType = 'USA' | 'CAN' | 'UK' | 'MX';
type UserType = 'person' | 'corporate';

interface AddUserState {
  displayName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  // country: Country;
  country: CountryType;
  userType: UserType;
}

const initialState: AddUserState = {
  displayName: '',
  street: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'USA',
  userType: 'person',
};

const AddUser = (): JSX.Element => {
  const [ formState, setFormState ] = useState<AddUserState>( initialState );

  const updateFormState: React.FormEventHandler<
  HTMLInputElement | HTMLSelectElement
  > = ( event ) => {
    const field = event.currentTarget;
    setFormState( {
      ...formState,
      [field.name]: field.value,
    } );
  };

  const handleClick = () => {
    console.log( 'Runs when the submit button is clicked.' );
    console.log( 'FormState: ', formState );
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
        fieldValue={formState.street}
        changeInput={updateFormState}
        label="Street"
        fieldName="street"
      />
      <TextInput
        fieldValue={formState.city}
        changeInput={updateFormState}
        label="City"
        fieldName="city"
      />
      <TextInput
        fieldValue={formState.state}
        changeInput={updateFormState}
        label="State"
        fieldName="state"
      />
      <TextInput
        fieldValue={formState.postalCode}
        changeInput={updateFormState}
        label="Postal Code"
        fieldName="postalCode"
      />
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
        <button className="btn btn-success" type="submit" onClick={handleClick}>
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
