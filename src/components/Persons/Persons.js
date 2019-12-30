import React,{Component} from 'react';
import Person from './person/Person';

class Persons extends Component{

    static getDerivedStateFromProps(props,state){
        console.log("Get derived in persons....");
        return state;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldCoomponentUpdate Persons");
        return true;
    }
    render(){

        console.log("Persons reder....");
    return(
    this.props.persons.map((person,index) => {
        return (<Person key={index}
        click={()=>this.props.clicked(index)}
        name={person.name} 
        age={person.age}
        changed={(event)=>this.props.changed(event,person.id)} ></Person>)
    })
    )
}
}

export default Persons;