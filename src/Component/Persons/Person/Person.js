import React , {Component} from 'react';
import sweety from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


 class Person extends Component {
    constructor(props){
        super(props)
        this.inputElementref = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() {
        //this.inputElement.focus()
        this.inputElementref.current.focus();
    };

     render() {

        console.log("Person.js rendering");

        return (
            //<div className= {sweety.Person}>
                <Auxiliary>
                {this.context.authentication?<p>Authenticated</p>:<p>Please Login</p>}
                <p onClick= {this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                onChange = {this.props.changed} 
                //ref = {(inputEl) => this.inputElement=inputEl}
                ref ={this.inputElementref}
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