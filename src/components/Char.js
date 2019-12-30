import React from 'react';

const char= (props)=>{
   const style = {
       display:'inline-block',
       padding:'16px',
       margin:'16px',
       border:'1px solid red',
       textAlign:'center'
   }
    return(

        <div className="char" style={style} onClick={props.clicked}>
         {props.chr}
        </div>
    );
}

export default char;