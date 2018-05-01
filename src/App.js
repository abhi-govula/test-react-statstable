import React, { Component } from 'react';
import StatsTable from "./StatsTable";
import axios from "axios";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // data: [{
      //   "chargeState": 20,
      //   "healthState": 90.75,
      //   "distRemainMile": 1,
      //   "chargeReachedFlag": "false",
      //   "telematicsDeviceId": "1903600898",
      //   "customerEquipId": "DD876",
      //   "tspName": "Saucon"
      // },
      // {
      //   "chargeState": 50.25,
      //   "healthState": 88.34,
      //   "distRemainMile": 67,
      //   "chargeReachedFlag": "true",
      //   "telematicsDeviceId": "8102369",
      //   "customerEquipId": "5229999",
      //   "tspName": "zonar"
      // },
      // {
      //   "chargeState": 100,
      //   "healthState": 100,
      //   "distRemainMile": 100,
      //   "chargeReachedFlag": "false",
      //   "telematicsDeviceId": "8102370",
      //   "customerEquipId": "5229998",
      //   "tspName": "zonar"
      // },
      // {
      //   "chargeState": 50.25,
      //   "healthState": 88.34,
      //   "distRemainMile": 67,
      //   "chargeReachedFlag": "true",
      //   "telematicsDeviceId": "8102371",
      //   "customerEquipId": "5229997",
      //   "tspName": "zonar"
      // }]
      data: []
    }
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getData() {
    const url = "https://4uakzzndd6.execute-api.us-east-1.amazonaws.com/test/EV-BatteryStatusApi-test-us-east-1?customerName=Gillig";
    axios.get(url).then((data) => {
      console.log (data);
      if (data) {
        const items = data.EVBatterySummaryAPI;
        this.setState({ data: items });
      }
    })
      .catch((error) => {
        console.log(error);
        this.setState({ data: [] });
      });
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
