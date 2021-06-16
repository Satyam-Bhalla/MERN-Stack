import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    )

    return ( 
        <h1>It will show the season</h1>
     );
}
 
export default App;