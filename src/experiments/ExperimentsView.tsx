import React from 'react';
import { Route, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld';

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
            </ul>
          </nav>
        </div>
        {/* Display */}
        <div className="col">
          <Route path="/experiments/hello-world">
            <HelloWorld />
          </Route>
        </div>
      </div>
    </section>
  );
}
