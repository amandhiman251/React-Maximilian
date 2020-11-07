import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component { 
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.person!==this.props.person){
        return true;
        } else{
            return false;
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: "SnapShot!"};
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] comonentDidUpdate');
        console.log(snapshot);

    }

    componentWillUnmount(){
        console.log('[Persons.js] cleaning up work');
    }
    render(){
        console.log("Person.js rendering")
        return( 
        this.props.person.map((person, index) => { 
        return (<Person 
        name = {person.name} 
        age = {person.age}
        key= {person.id}
        click = {() => this.props.clicked(index)}
        changed ={(event) => this.props.changed(event, person.id)} />
    );}));
    }
    
};
export default Persons;