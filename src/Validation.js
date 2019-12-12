import React from 'react';

const validation =(props)=>{
    const len = props.len;
    var text = "Text Length is too short";
    var col='red';
    if(len>=5)
    {text = "Text Length is Enough";
        col='blue';
}
    return (
        
     <p style={{color:col}}>{text}</p>
    );
}
export default validation;