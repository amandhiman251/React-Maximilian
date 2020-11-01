import React, { Component } from 'react';
import './App.css';
import Person from '../component/Person/Person';


class App extends Component {

    render(){
        return(
            <div className = "App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <Person name = "Aman" age = "30" />
                <Person name = "Sweety" age = "27" >My Hobbies: Racing </Person>
                <Person name = "Julie" age = "5" />
            </div>
           );
    
    }
}

export default App