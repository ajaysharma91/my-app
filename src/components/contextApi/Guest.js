import React,{Component} from 'react';
import {MyContext} from './ContextApiApp';
export default class Guest extends Component{
render(){
    return(
        <div>
        <h1>Hello This is Guest..!!</h1>
        <MyContext.Consumer>
{ ({data,changedAge}) => {
return <div>
    <h3>Name: {data.name} And Age: {data.age}</h3>
    <button onClick={changedAge}>After One Year Age</button>
    </div> 

}}
        </MyContext.Consumer>
        </div>
    );
}
    
}