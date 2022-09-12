import React from 'react';
import './App.css';
// import './Components/style.css';
// import StateUse from './state';
// import JSX from "./JSX";
// import Event from "./Event";
// import ClassUsingState from './Components/ClassUsingState';
// import Prop from './Components/Props/Prop';
// import './Components/Props/prop.css';

import OnChange from './Components/GetDataOnChange/OnChange';

function App() {
  return (
    <div className="App">
       {/* <JSX /> */}
       {/* <Event /> */}
       {/* <StateUse /> */}
      {/* <ClassUsingState /> */}
      {/* props */}
      {/* <Prop name="Prince" email="prince@gmail.com" a/> */}
      {/* <Prop name="Rahul Sharma" email="rahul@gmail.com"/>
      <Prop name="Aman Sharma" email="aman@gmail.com"/> */}

      <OnChange />
    </div>
  );
}

export default App;
