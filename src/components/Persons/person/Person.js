import React,{Component} from 'react';
import  './Person.css';
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
 class Person extends Component{
    //    const style = {
    //        '@media (min-width:500px)':{
    //            width:'450px',
    //            backfroundColor:'gray'
    //        }
    //    }
       render(){

        console.log("Person rederer..");
        return(
            <StyleDiv>
                
               <h1 onClick={this.props.click}>Hello I'm {this.props.name}
                And My Age is {this.props.age} 
                </h1>
               <p>{this.props.children}</p>
               <input  type="text" onChange={this.props.changed} value={this.props.value}></input>
            </StyleDiv>
            
        );
       }
   
}
export default Person;