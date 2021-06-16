import React from 'react';
import ReactDOM from 'react-dom';
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

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { lat: null, long: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude, long: position.coords.longitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    )
  }
  

  render(){
    if(this.state.errorMessage && !this.state.lat && !this.state.long){
      return <div><h3>Error: {this.state.errorMessage} </h3></div>
    }

    if(!this.state.errorMessage && this.state.lat && this.state.long){
      return <div>
              <h1>Location: </h1>
              <h3>Latitude: {this.state.lat} </h3>
              <h3>Longitude: {this.state.long}</h3>
          </div>
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

