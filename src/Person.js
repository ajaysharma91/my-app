import React from 'react';

 const Person = (props)=>{
    return(
        <div>
            <h1>Hello I'm {props.name} And My Age is {props.age}</h1>
            <p>{props.children}</p>
        </div>
    );
}
export default Person;