# Lab 1

## Part 1

Under `UsersView.tsx` add a horizontal unordered list with the following configuration:

- "Add a user" pointing to `AddUser.tsx` on the URL /users/add. 
- "Find users" pointing to `FindUsers.tsx` on the URL /users/find.
- "Browse users" pointing to `BrowseUsers.tsx` on the URL /users/browse.

You will need to create placeholder components for each of these. A simple `div` with a header
or paragraph saying "Add a user" or whatever is enough.

Each bullet above will need a `Link` pointing to a `Route` which loads a component.

Test the links as you go along to make sure they are working. 

## Part 2

In `AddUser.tsx`, add a button labeled 'Add' which, when clicked, logs to the console 'User successfully added'.
Obviously we will add the functionality later.

In `FindUsers.tsx`, add a button labeled 'Search' which, when clicked, logs to the console. 'Searching for matching
users'. Again, we will add the functionality later.

## Part 3

In `FindUsers.tsx`, add a form field "Search by display name". The field should be a controlled component. When the
"Search" button is clicked on, update the console AND the component to say "Searching on {searchTerm}" for whatever 
search term the user entered. 

### Challenge

In `AddUser.tsx`, set up form fields to capture the following information

* displayName
* street
* city
* state
* postalCode
* country
* corporate or personal user (probably a radio button set)

When the "Add" button is clicked, log the information to the console. 