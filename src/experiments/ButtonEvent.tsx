import React from 'react';

// function ButtonEventFn() {}
const ButtonEvent = (): JSX.Element => {
  function handleButtonClick(): void {
    console.log( 'You clicked on the button!' );
  }

  const handleButtonClickExpression = function(): void {
    console.log( 'You clicked on the button!' );
  };

  const handleButtonClickArrow = (): void => {
    console.log( 'You clicked on the button!' );
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
};

const ButtonEventInline = (): JSX.Element => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log( '[Inline] You clicked on the button!' );
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default ButtonEvent;
