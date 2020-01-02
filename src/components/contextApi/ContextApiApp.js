import React,{Component} from 'react';
import User from './User';
export const MyContext = React.createContext();
export default class ContextApiApp extends Component{
    state={
        name:"ajay",
        age:27
    };
    changedAgeAfterOneYesr=()=>{
        this.setState({age:this.state.age+1});
    }
    render() {
        const dataContext={
            data:this.state,
            changedAge:this.changedAgeAfterOneYesr
        }
        return (
           
                <MyContext.Provider value={dataContext}>
                <h1>Hello This Is Context Api Example..!!</h1>
                <User />
              </MyContext.Provider>
            
        )
    }

}