import React from 'react';
//import './Person.css';
import styled from 'styled-components';
//always use first uppercase letter for variavle name

const Stylediv = styled.div`
    width: 60%;
    margin: 16px auto;
    border:1px solid #eee;
    box-shadow:0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
@media (min-width:500px){
        width: 450px;
}
`;

const Person = (props) => {

    return (
        //<div className= "Person">
        <Stylediv>
            <p onClick= {props.click}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} defaultValue= {props.name} />
        </Stylediv>
        //</div>
    );
};

export default Person;