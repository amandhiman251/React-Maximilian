import React, { Component } from 'react';
import './App.css';
import Person from '../component/Person/Person';


class App extends Component {

    render(){
        return(
            <div class = "App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <Person />
            </div>
           );
    
    }
}

export default App