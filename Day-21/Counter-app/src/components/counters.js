import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            value={item.value}
            counter={item}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
