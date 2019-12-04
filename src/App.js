import React from 'react';

import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
     <Person name="Ajay Sharma" age="27"/>
     <Person name="Rahul Sharma" age="29"> I'm going to home </Person>
     <Person name="vijay Sharma" age="21"/>
    </div>
  );
}

export default App;
