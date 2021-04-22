/*
Controlled vs Uncontrolled -- https://reactjs.org/docs/forms.html#controlled-components

updates:
Controlled components update on every interaction (keypress, click, etc)
Uncontrolled components update when you tell them to update (you set this)

re-render:
Controlled components provoke re-rendering on every update because they're tied to state
Unconstrolled components may not even provoke re-rendering

external updates:
Controlled components can reflect updates to data from other than the form field
Uncontrolled components cannot reflect updates other than through user interactions (typing, clicking, etc)

collecting data:
Controlled components are up-to-date
Data from uncontrolled components may be stale
*/

import React, { ChangeEvent, ReactElement, useState, useRef } from 'react';

export default function FormWidgets(): ReactElement {
  const [ userName, setUserName ] = useState( '' );
  const [ newUserName, setNewUserName ] = useState( '' );
  const inputRef = useRef<HTMLInputElement>( null );

  function handleUpdateText( event: ChangeEvent<HTMLInputElement> ) {
    setUserName( event.currentTarget.value );
  }

  function handleButtonClick() {
    console.log(
      'Current value of the uncontrolled component: ',
      inputRef.current?.value,
    );
    inputRef.current?.value && setNewUserName( inputRef.current?.value );
  }

  return (
    <section>
      {/* Controlled Component */}
      <div className="row bg-primary">
        <div className="col">
          <div className="form-group">
            <label htmlFor="user-name">
              Enter your name for the controlled component:
            </label>
            <input
              type="text"
              id="user-name"
              className="form-control"
              onChange={handleUpdateText}
              value={userName}
            />
          </div>
          <p>Hello, {userName}</p>
        </div>
      </div>

      {/* Uncontrolled Component */}
      <div className="row bg-warning">
        <div className="col">
          <div className="form-group">
            <label htmlFor="new-user-name">Enter your name:</label>
            <input
              type="text"
              id="new-user-name"
              className="form-control"
              ref={inputRef}
            />
            <button className="btn btn-info mt-2" onClick={handleButtonClick}>
              Say hello to the uncontrolled component!
            </button>
          </div>
          <p>Hello, {newUserName}</p>
        </div>
      </div>
    </section>
  );
}
