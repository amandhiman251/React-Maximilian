import React from 'react';
import sweety from './Person.module.css';



const Person = (props) => {
    console.log("Person.js rendering")

    return (
        <div className= {sweety.Person}>
            <p onClick= {props.click}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} defaultValue= {props.name} />
        </div>
    );
};

export default Person;