import React from 'react';
import  './css/Person.css';
 const Person = (props)=>{
    return(
        <div className="Person">
            <h1>Hello I'm {props.name} And My Age is {props.age}</h1>
            <p>{props.children}</p>
            Change Name: <input type="text" onChange={props.changed} value={props.value}></input>
        </div>
    );
}
export default Person;