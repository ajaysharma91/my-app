import React from 'react';
import  './css/Person.css';
 const Person = (props)=>{
    return(
        <div className="Person" >
            <h1 onClick={props.click}>Hello I'm {props.name} And My Age is {props.age} </h1>
            <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.value}></input>
        </div>
    );
}
export default Person;