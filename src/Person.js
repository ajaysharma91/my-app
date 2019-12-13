import React from 'react';
import  './css/Person.css';
import Radium from 'radium';
 const Person = (props)=>{
       const style = {
           '@media (min-width:500px)':{
               width:'450px',
               backfroundColor:'gray'
           }
       }
       
    return(
        <div className="Person" style={style} >
            <h1 onClick={props.click}>Hello I'm {props.name} And My Age is {props.age} </h1>
            <p>{props.children}</p>
        <input  type="text" onChange={props.changed} value={props.value}></input>
        </div>
    );
}
export default Radium(Person);