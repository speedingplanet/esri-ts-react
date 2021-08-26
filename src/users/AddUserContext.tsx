import React, { useContext } from 'react';
import { UsersContext } from './UsersViewContext';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Country {
  USA,
  CAN,
  UK,
  MX,
}

const AddUser = (): JSX.Element => {
  const context = useContext( UsersContext );

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">
          Display Name
        </label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          name="displayName"
          value={context.user.displayName}
          onInput={( event ) =>
            context.dispatch( 'displayName', event.currentTarget.value )
          }
        />
      </div>
      <TextInput
        fieldValue={context.user.address.street}
        changeInput={( event ) =>
          context.dispatch( 'street', event.currentTarget.value )
        }
        label="Street"
        fieldName="street"
      />
      <TextInput
        fieldValue={context.user.address.city}
        changeInput={( event ) =>
          context.dispatch( 'city', event.currentTarget.value )
        }
        label="City"
        fieldName="city"
      />
      <TextInput
        fieldValue={context.user.address.state}
        changeInput={( event ) =>
          context.dispatch( 'state', event.currentTarget.value )
        }
        label="State"
        fieldName="state"
      />
      <TextInput
        fieldValue={context.user.address.postalCode}
        changeInput={( event ) =>
          context.dispatch( 'postalCode', event.currentTarget.value )
        }
        label="Postal Code"
        fieldName="postalCode"
      />
      {/*
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={context.user.country}
          name="country"
          onChange={(event) => actionCreator('', event.currentTarget.value)}
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
        <button className="btn btn-success" type="submit">
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
