import React from 'react';

const OutputData = (props)=>{
    return(
        <div className="OutputData">
            <p>UserName: {props.name}</p>
            <p>User Age: {props.age}</p>
        </div>
    );
}

export default OutputData;