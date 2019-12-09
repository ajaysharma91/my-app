import React from 'react';
import {useState} from 'react';
import './App.css';
import Person from './Person';

function App() {
  const [personState,personSetState] = useState( {
    persons :[
      {name:"ajay sharma", age:25},
      {name:"vijay sharma", age:25},
      {name:"kailash sharma", age:25}
    ]
  });

  const handleStateChange = ()=>{
    console.log("changed");
    personSetState({
      persons :[
      {name:"ravbi sharma", age:25},
      {name:"vijay devedas", age:35},
      {name:"kailash sharma", age:25}
    ]
  })
  }

  return (
    <div className="App">
     <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
     <Person name={personState.persons[1].name} age={personState.persons[1].age}> I'm going to home </Person>
     <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
     <button onClick={handleStateChange}>Changed</button>
    </div>
  );
  
}

export default App;



