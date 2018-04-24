import React, { Component } from 'react';
import StatsTable from "./StatsTable";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data:  [{
        "SoC": 44,
        "SoH": 55,
        "RemainingRangeMiles": 122,
        "Latitude": "20",
        "Longitude": "58",
        "CustRef": "123",
        "CustomerID": "123",
        "EquipmentID": "123" 
},
{
        "SoC": 44,
        "SoH": 55,
        "RemainingRangeMiles": 122,
        "Latitude": "20",
        "Longitude": "58",
        "CustRef": "123",
        "CustomerID": "123",
        "EquipmentID": "124" 
        }
]
    }
  }
  render() {
    return (
      <div className="App">
        <StatsTable data={this.state.data} />
      </div>
    );
  }
}

export default App;
