import React from 'react';
import classes from './Cockplit.css';
const cockplit = (props)=>{
    let btnClasses='';
    //if(props.showtext)
   // btnClasses='red';
    return(
        <div className={classes.Cockplit}>
             <h1>Hello This is ReactJS!!!!</h1>
             <button
             onClick={props.clicked}>
                 {props.showtext}
             </button>
        </div>
    )
};

export default cockplit;