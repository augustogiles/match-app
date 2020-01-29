import React, { Component } from 'react';
import { computeTable } from '../utils'

const TableObject = objects => {
  return (
    <table className="team-stats">
      <tbody>
        {Object.entries(objects).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  componentDidMount(){
    Promise.all([
      fetch("/teams"),
      fetch("/weeks")
    ]).then((teams, weeksMatches) => {
      this.setState({
        table: computeTable(teams, weeksMatches)
      });
    });
  }

  render() {
    const t = this.state.table;
    if (!t) return <div>loading...</div>;

    return "TODO 4";
  }
}