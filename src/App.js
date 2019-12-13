import React from 'react';
//import {useState} from 'react';
import './App.css';
// import Person from './Person';
import Validation from './Validation';
import Char from './Char';
class App extends React.Component {
  
  state={
    userInput:''
  }

  
   handleNameAndAgeChange = (event)=>{
   this.setState({userInput: event.target.value});
  }
  
  deleteChar =(index)=>{
   const char = this.state.userInput.split('');
   char.splice(index,1);
   const updateChar = char.join('');
   this.setState({userInput:updateChar});
  }
   
  render(){
    const style = {
      color:"red",
      border:"1px 2px solid green"
      

    }

    const charList = this.state.userInput.split('').map((ch, index)=>{
      return <Char chr={ch} clicked={()=>this.deleteChar(index)}/>;
    })
  return (
   
    <div className="App">
    <h1>Hello This Is Assignment-1</h1>
     <input type="text" placeholder="Enter Name: " onChange={this.handleNameAndAgeChange}/>
     <p style={style}>{this.state.userInput}</p>
     <Validation len={this.state.userInput.length}/>
     {charList}
    </div>
  );
  }
}

export default App;



