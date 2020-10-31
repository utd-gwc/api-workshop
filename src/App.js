import './App.css';
import React, { useState } from 'react'
import { Typography, Input } from 'antd'
import Reps from './Reps';

const API_KEY = process.env.REACT_APP_API_KEY

function parser(offices, officials) {
  var rows = [];
  var currRow = [];
  var officeIndex = 0;
  const rowLength = 4;
  while (officeIndex < offices.length) {
    var currOffice = offices[officeIndex];
    for (var i = 0; i < currOffice.officialIndices.length; i += 1) {
      currRow.push({
        "info": officials[currOffice.officialIndices[i]],
        "office": currOffice
      });
      if (currRow.length === rowLength) {
        rows.push(currRow);
        currRow = [];
      }
    }
    officeIndex += 1;
  }

  if (currRow.length > 0) {
    rows.push(currRow);
  }
  return rows;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [rowsOfReps, setRowsOfReps] = useState(null);

  async function onSearch(value) {
    if (!value)
      return;
    setLoading(true);

    const address = encodeURI(value);
    const res = await fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=${address}`,
      { method: 'GET' }
    );
    const json = await res.json();

    if (json.error != null) {
      alert("ERROR")
    } else {
      const rows = parser(json.offices, json.officials)
      setRowsOfReps(rows);
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Typography.Title style={{ color: "white", marginTop: 20 }}>
          Find Your Reps
        </Typography.Title>
        <Input.Search placeholder="Enter your address" onSearch={onSearch} loading={loading} allowClear style={{ width: 200, marginBottom: 20 }} />
        <Reps rowsOfReps={rowsOfReps} />
      </div>
    </div>
  );
}

export default App;
