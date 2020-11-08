import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { 
    /* if we use shouldComponentUpdate life cycle than 
    we have to check every props in this case like 
    props.clicked and props.changed and this will be 
    a lot of code so instead this use Pure component 
    this wil to the same work with no code*/

    /* shouldComponentUpdate(nextProps, nextState){
         console.log('[Persons.js] shouldComponentUpdate');
         if(nextProps.person!==this.props.person
            ||nextProps.clicked!==this.props.clicked
            ||nextProps.changed!==this.props.changed){
         return true;
         } else{
             return false;
         }
     }*/
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
        isauth = {this.props.isauthenticated}
        age = {person.age}
        key= {person.id}
        click = {() => this.props.clicked(index)}
        changed ={(event) => this.props.changed(event, person.id)} />
    );}));
    }
    
};
export default Persons;