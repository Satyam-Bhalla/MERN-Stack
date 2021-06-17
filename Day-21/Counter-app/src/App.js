import React, { Component } from "react";
import Navbar from "../src/components/navbar";
import Counters from "../src/components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((a) => {
      console.log(a);
      a.value = 0;
      return a;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    console.log(counters[index]);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})

  };

  handleDecrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    console.log(counters[index]);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters})
  }

  handleDelete = (id) => {
      console.log("Delete Event Called" ,id);
      const counters = this.state.counters.filter((a) => a.id !== id);
      this.setState({counters})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container mt-2">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
