import React from 'react';
import { Route, Link } from 'react-router-dom';
import ButtonEvent from './ButtonEvent';
import HelloWorld from './HelloWorld';
import HelloWorldProps from './HelloWorldProps';

export default function ExperimentsView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Experiments</h2>
        </div>
      </div>
      <div className="row">
        {/* Navigation */}
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link to="/experiments/hello-world">
                  Hello, world (component)!
                </Link>
              </li>
              <li>
                <Link to="/experiments/hello-world-props">
                  Hello, world (props)!
                </Link>
              </li>
              <li>
                <Link to="/experiments/button-event">Event Handling</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Display */}
        <div className="col">
          <Route path="/experiments/hello-world">
            <HelloWorld />
          </Route>
          <Route path="/experiments/hello-world-props">
            <HelloWorldProps message="Greetings (as a property)!" />
          </Route>
          <Route path="/experiments/button-event">
            <ButtonEvent />
          </Route>
        </div>
      </div>
    </section>
  );
}
