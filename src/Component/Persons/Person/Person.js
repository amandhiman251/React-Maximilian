import React , {Component} from 'react';
import sweety from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';



 class Person extends Component {
     render() {

        console.log("Person.js rendering");

        return (
            //<div className= {sweety.Person}>
                <Auxiliary>
                <p onClick= {this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange = {this.props.changed} defaultValue= {this.props.name} />
                </Auxiliary>
            //</div>
        );
    };
    
};

export default Person;