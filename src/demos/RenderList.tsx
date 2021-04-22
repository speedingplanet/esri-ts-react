import { orderBy } from 'lodash';
import React, { ReactElement, useState } from 'react';

/*
Case that react thinks about:

First Render:
apples
bananas
oranges

Second Render:
apples
**pears**   // re-renders everything below the pairs
**bananas**
**oranges**

===============================================

First Render:
apples/1
bananas/2 
oranges/3 

Second Render:
apples/1 
**pears/4**    // only this element re-renders
bananas/2 
oranges/3 

*/

let originalShips = [
  { name: 'Enterprise', id: 1 },
  { name: 'Sulaco', id: 2 },
  { name: 'Nostomo', id: 3 },
  { name: 'Alabama', id: 4 },
  { name: 'Minnow', id: 5 },
  { name: 'Serenity', id: 6 },
  { name: 'Pequod', id: 7 },
  { name: 'Revenge', id: 8 },
  { name: 'Black Pearl', id: 9 },
];

export default function RenderList(): ReactElement {
  const [ ships, setShips ] = useState( originalShips );
  const handleSortButton = () => {
    setShips( orderBy( ships, 'name', 'asc' ) );
  };
  return (
    <section>
      <div className="row">
        <div className="col">
          <ul>
            {ships.map( ( ship ) => (
              <li key={ship.id}>{ship.name}</li>
            ) )}
          </ul>
          <button className="btn btn-warning" onClick={handleSortButton}>
            Sort the ships!
          </button>
        </div>
      </div>
    </section>
  );
}
