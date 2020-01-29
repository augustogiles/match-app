import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Results } from '../Results/Results' 
import { fetch } from '../services/api'

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
      <div className="weeks">
        <h1>Weeks</h1>
        <div className="week-chooser">
          <ul className="unstyled">
            {this.state.data.map((week, weekNumber) => (
              <li key={weekNumber}>
                <Link to={`/weeks/${weekNumber}`}>{weekNumber}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h2>Results for week #{this.state.chosenWeek}</h2>
        <Results results={this.state.data[this.state.chosenWeek]} />
      </div>
    );
  }
}