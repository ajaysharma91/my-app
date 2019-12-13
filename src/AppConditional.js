import React from 'react';
import './App.css';
import Radium,{StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person';
const Stylebutton = styled.button`
background-color: ${props => props.alt?'red':'green'};
color:'white';
border:1px solid white;
padding:8px;
textAlign:center;
margin:10px;
cursor:pointer;
&:hover{
  background-color:${props => props.alt?'blue':'lightgreen'};
}
`;
class AppConditional extends React.Component {
  state= {
    persons :[
      {id:1,name:"ajay sharma", age:25},
      {id:2,name:"vijay sharma", age:25},
      {id:3,name:"kailash sharma", age:25}
    ],
    showPerson:false,
    showText:"Show the Person Containt"
  }
  deletehandler = (index)=>{
     const person = this.state.persons.slice();
     person.splice(index,1);
     this.setState({persons:person});
   }
   handleStateChange = ()=>{
   var shoediv = this.state.showPerson;
   if(shoediv)
   this.setState({showText:"Show The Person Containt"});
   else
   this.setState({showText:"Close The Person Containt"});
   this.setState({showPerson:!shoediv});
  }

  nameChangeHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex((p)=>{
        return p.id === id;
    })

    const person = {
        ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons :persons})
  }
  render(){

      const style = {
        backgroundColor:'green',
        color:'white',
        border:'1px solid white',
        padding:'8px',
        textAlign:'center',
        margin:'10px',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightgreen'
        }
      }
      let person = null;
      if(this.state.showPerson === true)
      {
          person=(
            <div>
                { this.state.persons.map((person,index) => {
                return <Person key={index}
                click={()=>this.deletehandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event)=>this.nameChangeHandler(event,person.id)} />
            })}
                
               
            </div> 
          );
          // style.backgroundColor='red';
          // style[':hover']={
          //   backgroundColor:"lightblue"
          // }
      }
  return (
    
    <div className="App">
        <h1>Hello This is ReactJS!!!!</h1>
        <Stylebutton alt={this.state.showPerson} onClick={this.handleStateChange}>{this.state.showText}</Stylebutton>
      {person}
    </div>
   
  )};
  
}

export default AppConditional ;



