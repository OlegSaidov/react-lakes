import React from 'react';
import './App.css';

function App({lakes}) {
  return (
    <div className="">

      <ul>
        {
          lakes.map(lake =>
            <li key={lake.id}>{lake.name + " is located here in " + lake.region}</li>

          )
        }

      </ul>

    </div>
  );
}

export default App;
