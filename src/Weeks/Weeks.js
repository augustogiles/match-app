import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Results } from '../Results/Results' 
import { fetch } from '../services/api'

import styled from 'styled-components'

const WeekStyled = styled.div `
  width: 800px;
  height: 100%;
  max-height: calc(100% - 240px);

  background-color: white;
  margin: 120px auto 50px auto;
  
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);

  overflow: auto;

  h2 {
    text-align: center;
    font-weight: 200;
    color: rgba(0,0,0,.54);
  }
`;

const WeekHeaderStyled = styled.div `
  background-color: #999999;
  width: 100%;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
  display: flex;
  align-items: center;

  h1 {
    float: left;
    padding: 12px 16px;
    font-weight: 400;

    color: #ffffff;
  }
`;

const WeekListStyled = styled.ul `

`;

const WeekListItem = styled.li `
  float: left;
  padding: 12px 16px;

  color: ${({selected}) => selected ? '#ffffff;' : '#dddddd;'};
  border-bottom: ${({selected}) => selected ? '2px solid #ffffff;' : 'none;'};
  background-color: ${({selected}) => selected ? 'rgba(0,0,0,.1);' : 'inherit;'};
`;

export default class Weeks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      chosenWeek: this.getWeek() // TASK #2 - make matches start at 1 instead of 0
    };
  }

  getWeek() {
    let index = parseInt(this.props.match.params.index, 10)
    if (index > 0) {
      index -= 1;
    }
    return index;
  }

  componentDidMount(){
    fetch("/weeks").then(data => this.setState({ data: data }));
  }

  componentWillReceiveProps(nextProps) {
    const oldIndex = this.state.data.id;
    const newIndex = parseInt(nextProps.match.params.index, 10);
    if (oldIndex !== newIndex) {
      this.setState({ chosenWeek: newIndex });
    }
  }

  render() {
    let { data } = this.state;
    if (!data.length) return <div>loading...</div>;

    return (
      <WeekStyled>
        <WeekHeaderStyled>
          <h1>Weeks</h1>
          <WeekListStyled>
            {this.state.data.map((week, weekNumber) => (
              <WeekListItem key={weekNumber}>
                <Link to={`/weeks/${weekNumber}`}>{weekNumber}</Link>
              </WeekListItem>
            ))}
          </WeekListStyled>
        </WeekHeaderStyled>
        <h2>Results for week #{this.state.chosenWeek}</h2>
        <Results results={this.state.data[this.state.chosenWeek]} />
      </WeekStyled>
    );
  }
}