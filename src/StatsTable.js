import React, { Component } from "react";

const Bar = (props) => {
  return<span><span></span><span>{props.val}</span></span>
}
class StatsTable extends Component {
  render() {
    const rowData = this.props.data.map((itm) => {
      return (<tr key={itm.EquipmentID}>
        <td>{itm.EquipmentID}</td>
        <td className="percentagecol"><Bar val={itm.SoC} /></td>
        <td>{itm.RemainingRangeMiles}</td>
        <td>{itm.SoH}</td>
      </tr>)
    })
    return (<table className="statstable">
      <thead>
      <tr className="headerrow">
        <th>Bus</th>
        <th width="500">Battery Charge (%)</th>
        <th>Range (Miles)</th>
        <th>Battery Health</th>
      </tr>
      </thead>
      <tbody>
      {rowData}
      </tbody>
    </table>)
  }
}

export default StatsTable;