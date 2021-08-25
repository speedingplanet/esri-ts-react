# Lab 2

## Part 1: Intercomponent communication

We want to pass the search term from `FindUsers` and the new user from `AddUser` up to `UsersView`. The `UsersView` component will manage the state for the application.

### FindUsers.tsx

When the "Find Users" button is clicked on, pass the search term to its parent component in a custom event `searchDisplayName`.

### UsersView.tsx

Create an event handler, and attach it to `FindUsers`'s `searchDisplayName` event. The event handler can log the search term to the console or to the DOM, your choice.

### AddUser.tsx

When the "Add User" button is clicked on, pass the new user to its parent in a custom event `createUser`.

### UsersView.tsx

Create an event handler, and attach it to `AddUser`'s `createUser` event. The event handler can log the new user to the console or the DOM, your choice.

STOP HERE.

## Part 2

### BrowseUsers.tsx

Import `users` from @speedingplanet/rest-server. You may also want to import the `User` interface.

Iterate over `users` and generate an HTML table from the results. Display the following fields in the table:
- Display Name
- User Type
- City
- State

Navigate to /users/browse. Make sure that the list shows up as expected.

STOP HERE.

## Part 3

### UsersTable.tsx

Create a new file, `UsersTable.tsx`. It should be a component that takes the following properties:

- users: An array of users
- selectUser: An event that selects a User

### BrowseUsers.tsx

Extract the `<table>` portion into the new component `UsersTable`.  
Replace the '<table>' with `UsersTable`. 

### UsersView.tsx

Change the event handler for `searchDisplayName`. Instead of logging to the console or the DOM, it should now create a copy of the `users` array, filtered by the value from `searchDisplayName`. Render a `UsersTable` under `FindUsers` with the results from the search.  

Should the `UsersTable` appear when `FindUsers` is first rendered? If not, how could you hide it? (CSS? HTML attribute? JSX/React?) And, how can you change the state (hint!) of `UsersView` so that `UsersTable` appears where there are results to display?

STOP HERE.

## Part 4

### UsersView.tsx

Using `useEffect`, query http://localhost:8000/api/zippay/v1/users and get a count of the number of users. (Retrieving the entire array and getting the length of said array is sufficient.)  
Display the results as "There are X users" in `UsersView`. 

STOP HERE.

## Part 5

### UsersView.tsx

Replace the Promise-oriented code from part 4 with `async/await` code.

STOP HERE.

## Part 6

Overall, we are going to change the `FindUsers` search from being against a static `users` array to running against the REST server.

### UsersView.tsx

Remove the import of the `users` array.
Update the event handler for `searchDisplayName`. Instead of searching against `users`, query http://localhost:8000/api/zippay/v1/users for matching users. You can do this two ways:

- Directly alter the URL: 
  - /api/zippay/v1/users?displayName=whatever (exact)
  - /api/zippay/v1/users?displayName_like=whatever (case-insensitive partial match)
- Pass parameters as part of the `fetch` request
  - You would use URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  - StackOverflow example: https://stackoverflow.com/a/58437909

Use either Promises or async/await as you see fit.  

Docs for json-server can be found here: https://github.com/typicode/json-server

Check to see that your code successfully fetches.

STOP HERE. 