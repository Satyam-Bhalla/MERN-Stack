import React from 'react';
import UseEffectHook2 from './components/use-effect-example';
// import Welcome from './components/welcome';
// import BasicHook from './components/basic-hook';
// import UseEffectHook from './components/use-effect-hook';

function App(props) {
  // console.log(props);
  return (
    <React.Fragment>
      {/* <Welcome naam={props.name}/>
      <Welcome naam="Bhavika" /> */}
       
      {/* <BasicHook /> */}
      {/* <UseEffectHook /> */}
      <UseEffectHook2 />
    </React.Fragment>
  );
}

export default App;
