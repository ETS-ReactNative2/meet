import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
    };
  }

  updateNumberOfEvents = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
    this.props.updateEventNumbers(event.target.value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label className="numberOfEvents__label">Number of Events</label>
        <input
          type="number"
          className="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;

