import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import ComponentProps from './ComponentProps';
import ComponentState from './ComponentState';
import EventHandling from './EventHandling';

export default function DemosView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col text-center mb-2">
          <h2>Demos</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="list-unstyled">
            <li>
              <NavLink
                to="/demos/event-handling"
                activeClassName="font-weight-bold"
              >
                Event Handling
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/component-state"
                activeClassName="font-weight-bold"
              >
                Component State
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/component-props"
                activeClassName="font-weight-bold"
              >
                Component Props
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col">
          <Route path="/demos/event-handling">
            <EventHandling />
          </Route>
          <Route path="/demos/component-state">
            <ComponentState />
          </Route>
          <Route path="/demos/component-props">
            <ComponentProps />
          </Route>
        </div>
      </div>
    </section>
  );
}
