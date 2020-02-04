import React, { Component } from 'react';
import { computeTable } from '../utils';
import { fetch } from '../services/api';

import {Loading} from '../Loading/Loading'
import { NotFound } from '../NotFound/NotFound';
import {TableStyled, TableRowStyled} from './Table.styled'

const TableObject = (objects, onRowClick) => {
  
  return (
    <TableStyled className="team-stats">
      <thead>
        <tr>
          <th className="no-border"/>
          <th>#</th>
          <th>Team</th>
          <th>Won</th>
          <th>Draw</th>
          <th>Loss</th>
          <th>GP</th>
          <th>GC</th>
          <th>GD</th>
          <th>Pts</th>
          <th className="no-border"/>
        </tr>
      </thead>
      <tbody>
        {Object.entries(objects).map(([key, {id, name, wins, draws, losses, gp, gc, gd, points}]) => (
          <TableRowStyled key={id} onClick={() => onRowClick(id)}>
            <td className="no-border"/>
            <td>{parseInt(key, 10) + 1}</td>
            <td>{name}</td>
            <td>{wins}</td>
            <td>{draws}</td>
            <td>{losses}</td>
            <td>{gp}</td>
            <td>{gc}</td>
            <td>{gd}</td>
            <td>{points}</td>
            <td className="no-border"/>
          </TableRowStyled>
        ))}
      </tbody>
    </TableStyled>
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
    ]).then(([teams, weeksMatches]) => {
      this.setState({
        table: computeTable(teams, weeksMatches)
      });
    }, err => {
      this.setState({
        table: null
      });
    });
  }

  onRowClick = id =>{
    this.props.history.push(`teams/${id}`)
  }

  render() {
    const { table } = this.state;

    if (!table) return <NotFound generic={true}/>;
    if (table.length === 0 ) return <Loading/>;

    return TableObject(table, this.onRowClick);
  }
}