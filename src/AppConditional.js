import React from 'react';
import './App.css';
import Person from './Person';

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
        margin:'10px'
      }
      let person = null;
      if(this.state.showPerson == true)
      {
          person=(
            <div>
                { this.state.persons.map((person,index) => {
                return <Person 
                click={()=>this.deletehandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event)=>this.nameChangeHandler(event,person.id)} />
            })}
                
               
            </div> 
          );
          style.backgroundColor='red'
      }
  return (
    <div className="App">
        <h1>Hello This is ReactJS!!!!</h1>
        <button style={style} onClick={this.handleStateChange}>{this.state.showText}</button>
      {person}
    </div>
  )};
  
}

export default AppConditional;



