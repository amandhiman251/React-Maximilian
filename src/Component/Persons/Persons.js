import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>{ console.log("Person.js rendering");  return props.person.map((person, index) => { 
    return <Person 
    name = {person.name} 
    age = {person.age}
    key= {person.id}
    click = {() => props.clicked(index)}
    changed ={(event) => props.changed(event, person.id)} />
    });
};
export default Persons;