import React from 'react';

const AddUser = (): JSX.Element => {
  return (
    <div>
      <h3>Add user</h3>
      <p>To be added later</p>
      <button
        className="btn btn-lg btn-success"
        onClick={() => console.log( 'Added a user' )}
      >
        Add user
      </button>
    </div>
  );
};

export default AddUser;
