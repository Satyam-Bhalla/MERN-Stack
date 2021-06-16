import React from 'react';
import ReactDOM from 'react-dom';
import SeasonShow from '../src/components/SeasonShow';
// import App from '../src/components/App';


// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//       position => console.log(position),
//       err => console.log(err)
//   )

//   return ( 
//       <h1>It will show the season</h1>
//    );
// }


/**
 * Rules of State
 *  1.) Only usable with class components
 *  2.) You will confuse it with props
 *  3.) State is a JS object that contains data relevant to a component   
 *  4.) Updating state on a component causes the component to instantly rerenders
 *  5.) State must be initialized when a component is created
 *  6.) State can be updated using the function setState
 */ 


/**
 *  Component Lifecycle
 * 1.) Constructor   -> Good place to do one time setup
 * 2.) render -> content visible on screen  -> Avoid doing any computation other than returning JSX
 * 3.) ComponentDidMount (content visible on screen) -> Good place to do data loading
 * 4.) ComponentDidUpdate (Sit and wait for updates) -> Good place to do more data loading when state/props change 
 * 5.) ComponentWillUnmount(Sit and wait until this component is not longer shown) -> Good place to do cleanup(Specifically for non react stuff)   
 **/




class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = { lat: null, long: null, errorMessage: "" };

    
  // }
  state = { lat: null, long: null, errorMessage: "" };
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude, long: position.coords.longitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  // componentDidUpdate(){
  //   console.log('My component was just updated - it rerendered');
  // }

  render(){
    if(this.state.errorMessage && !this.state.lat && !this.state.long){
      return <div><h3>Error: {this.state.errorMessage} </h3></div>
    }

    if(!this.state.errorMessage && this.state.lat && this.state.long){
      return <SeasonShow lat={this.state.lat} long={this.state.long}  />
    }

    return <h3>Loading</h3>

    
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

