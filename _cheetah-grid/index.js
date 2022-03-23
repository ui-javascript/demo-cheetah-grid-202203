import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as cheetahGrid from 'cheetah-grid';
import { generatePersons } from './utils/mock';

const App = () => {
  useEffect(() => {
    new cheetahGrid.ListGrid({
      // Parent element on which to place the grid
      parentElement: document.querySelector('.grid-sample'),
      // Header definition
      header: [
        {
          field: 'check',
          caption: '',
          width: 50,
          columnType: 'check',
          action: 'check',
        },
        { field: 'personid', caption: 'ID', width: 100 },
        { field: 'fname', caption: 'First Name', width: 200 },
        { field: 'lname', caption: 'Last Name', width: 200 },
        { field: 'email', caption: 'Email', width: 250 },
      ],
      // Array data to be displayed on the grid
      records: generatePersons(1000),
      // Column fixed position
      frozenColCount: 2,
    });
  });

  return (
    <div>
      <div
        className="grid-sample"
        style={{
          height: 500,
          border: 'solid 1px #ddd',
        }}
      ></div>
    </div>
  );
};

export default App;
