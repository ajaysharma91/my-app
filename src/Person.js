import React from 'react';
import  './css/Person.css';
import Radium from 'radium';
import styled from 'styled-components';
const StyleDiv = styled.div`

margin: auto;
padding: 10px;
background-color: azure;
border:1px solid red;
text-align: center;

@media (min-width: 500px){
    width:450px; 
}
`;
 const Person = (props)=>{
    //    const style = {
    //        '@media (min-width:500px)':{
    //            width:'450px',
    //            backfroundColor:'gray'
    //        }
    //    }
       
    return(
        <StyleDiv>
           <h1 onClick={props.click}>Hello I'm {props.name} And My Age is {props.age} </h1>
           <p>{props.children}</p>
           <input  type="text" onChange={props.changed} value={props.value}></input>
        </StyleDiv>
        
    );
}
export default Person;