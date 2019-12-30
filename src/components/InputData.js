import React from 'react';

const IutputData = (props)=>{
    return  <input type="text" onChange={props.changed} value={props.currentName}/>
        
}

export default IutputData;