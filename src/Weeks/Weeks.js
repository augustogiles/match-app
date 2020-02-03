import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Results } from '../Results/Results';
import { fetch } from '../services/api';

import { Loading } from '../Loading/Loading';
import { NotFound } from '../NotFound/NotFound';

import { weeksMock } from '../Data/mockData';

import { WeekStyled, WeekHeaderStyled, WeekListStyled, WeekListItem, WeekBodyStyled } from './Weeks.styled';

export default class Weeks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      chosenWeek: this.getWeek() // TASK #2 - make matches start at 1 instead of 0
    };
  }

  getWeek() {
    let index = parseInt(this.props.match.params.index, 10)
    return this.calculeNewIndex(index);
  }

  calculeNewIndex(index){
    if (index === 0) {
      index = 0;
    } else if (index > 0) {
      index -= 1;
    }
    
    return index;
  }

  componentDidMount(){
    fetch("/weeks").then(data => {
      this.setState({ data: data })
    }, 
    err => {
      this.setState({
        data: weeksMock,
      })
    });
  }

  componentWillReceiveProps(nextProps) {
    const oldIndex = this.state.chosenWeek;
    const newIndex = this.calculeNewIndex(parseInt(nextProps.match.params.index, 10));

    if (oldIndex !== newIndex) {
      this.setState({ chosenWeek: newIndex });
    }
  }

  render() {
    let { data, chosenWeek } = this.state;
    if (!data) return <Loading/>;

    return (
      ( !!data[chosenWeek] && chosenWeek < data.length) ?
        <WeekStyled>
          <WeekHeaderStyled>
            <h1>Weeks</h1>
            <WeekListStyled>
              {this.state.data.map((week, weekNumber) => (
                <WeekListItem key={weekNumber} selected={weekNumber === chosenWeek}>
                  <Link to={`/weeks/${weekNumber + 1}`}>{weekNumber + 1}</Link>
                </WeekListItem>
              ))}
            </WeekListStyled>
          </WeekHeaderStyled>
          <WeekBodyStyled>
            <h2>Week #{chosenWeek + 1}</h2>
            <Results results={this.state.data[chosenWeek]} />
          </WeekBodyStyled>
        </WeekStyled>
      :
        <NotFound/>

    );
  }
}