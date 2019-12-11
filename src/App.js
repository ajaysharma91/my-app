import React from 'react';
//import {useState} from 'react';
import './App.css';
import Person from './Person';
import OutputData from './OutputData';
import InputData from './InputData';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName:"ajay"
      //this.handleNameAndAgeChange = this.handleNameAndAgeChange.bind();
    }
  }
 

   handleNameAndAgeChange = (event)=>{
   this.setState({userName: event.target.value});
  }

   
  render(){
    
  return (
   
    <div className="App">
    <OutputData name={this.state.userName} />
    <OutputData name={this.state.userName} />
    <OutputData name={this.state.userName}/>
    <OutputData name={this.state.userName} />
    <OutputData name={this.state.userName} />
    <InputData changed={this.handleNameAndAgeChange} currentName={this.state.userName} /> 
    
    </div>
  );
  }
}

export default App;



