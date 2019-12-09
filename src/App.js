import React from 'react';
//import {useState} from 'react';
import './App.css';
import Person from './Person';

class App extends React.Component {
  state= {
    persons :[
      {name:"ajay sharma", age:25},
      {name:"vijay sharma", age:25},
      {name:"kailash sharma", age:25}
    ]
  }

   handleStateChange = ()=>{
    console.log("changed");
    this.setState({
      persons :[
      {name:"ravbi sharma", age:25},
      {name:"vijay devedas", age:35},
      {name:"kailash sharma", age:25}
    ]
  })
  }

   nameChangeHandler = (event)=>{
    this.setState({
      persons :[
      {name:"ravbi sharma", age:25},
      {name:"vijay devedas", age:35},
      {name:event.target.value, age:25}
    ]
  })
  }
  render(){
    const style={
      backgroundColor:"red",
      width:'200px',
      font:'inherit'
    }
  return (
   
    <div className="App">
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I'm going to home </Person>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangeHandler}/>
     <button style={style} onClick={this.handleStateChange}>Changed</button>
    </div>
  );
  }
}

export default App;



