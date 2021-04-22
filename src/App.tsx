import React from 'react';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
import DemosView from './demos/DemosView';
import TransactionsView from './transactions/TransactionsView';
import UsersView from './users/UsersView';

// class -> className
// for -> htmlFor (<label>)

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <main className="container">
        <header className="row">
          <div className="col">
            <h1>Esri React + TypeScript</h1>
          </div>
        </header>
        <hr />
        <nav className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <NavLink to="/demos" activeClassName="font-weight-bold">
                  Demos
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/users" activeClassName="font-weight-bold">
                  Users
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/transactions" activeClassName="font-weight-bold">
                  Transactions
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/demos">
          <DemosView />
        </Route>
        <Route path="/users">
          <UsersView />
        </Route>
        <Route path="/transactions">
          <TransactionsView />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
