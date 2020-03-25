import React from 'react';
import './App.scss';
import CountriesDropDown from '../Regions/Regions';
import Table from '../Table/Table';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>AWS S3 Standard vs S3 Infrequent Access</h1>
        <p>Cost Calculator (All units per month)</p>
      </div>
      <div className="divider"></div>
      <div className="chart">
        <CountriesDropDown />
        <Table />
      </div>
    </div>
  );
}

export default App;
