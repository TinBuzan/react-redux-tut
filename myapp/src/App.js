import React from 'react';
import Ninjas from './Ninjas.js';

function App() {
  return (
    <div className="App">
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
      <Ninjas name="Yoshi" age="35" belt="green"/>
    </div>
  );
}

export default App;
