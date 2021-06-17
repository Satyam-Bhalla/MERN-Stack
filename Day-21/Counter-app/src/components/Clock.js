import React, { Component } from 'react';

class Clock extends Component {
    state = { time: new Date().toLocaleTimeString() }

    componentDidMount(){
        setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
        },1000)
    }

    render() { 
      return ( 
          <div>
              The time is: {this.state.time}
          </div>
       );
    }
  }
   
  export default Clock;