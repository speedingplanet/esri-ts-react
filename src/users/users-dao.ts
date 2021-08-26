const baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

function fetchUsers() {
  return fetch( baseUrl )
    .then( ( response ) => response.json() )
    .catch( ( err ) => console.error( 'Something went wrong: ', err ) );
}

const dao = {
  fetchUsers,
};

export default dao;
