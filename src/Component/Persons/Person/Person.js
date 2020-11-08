import React , {Component} from 'react';
import sweety from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';


 class Person extends Component {
     render() {

        console.log("Person.js rendering");

        return (
            //<div className= {sweety.Person}>
                <Auxiliary>
                <p onClick= {this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                onChange = {this.props.changed} 
                ref = {(inputEl) => inputEl.focus()}
                value= {this.props.name} />
                </Auxiliary>
            //</div>
        );
    };
    
};
Person.propTypes = {
    name: PropTypes.string,
    click:PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func 
}

export default withClass(Person, sweety.Person);