import React, {Component} from 'react';
import './App.css';
import Person from '../component/Person/Person';


class App extends Component {
     state={ 
         person : [
             { name : "Aman", age : "30"}, 
             {name : "Sweety", age : "27"}, 
             {name : "julie", age : "5"} 
         ],
         otherstate :'some other value',
         showPerson: true  
     }

     toggelPersonHandler = () => {
        this.setState( {showPerson: !this.state.showPerson} );
     }
    
    namechangeHandler =(event, key) => {
       const val = event.target.value;
        this.setState ({
            person : [
                { name : "Karan" , age : "30"}, 
                {name : val, age : "27"}, 
                {name : "Sweety", age : "50"} 
            ]  }
       )
    }


    render(){
        const style = {
            backgroundColor: "White",
            font:"inherit",
            border:"1px solid blue",
            pading:"8px",
            cursor: "pointer"
        };
        let persons = null;
        if(this.state.showPerson){
            persons = (
            <div>
                {this.state.person.map(person => { return <Person name = {person.name} age = {person.age} />}) }
             </div>
             ); 
            }
            

        return (
            <div className = "App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button style = {style} onClick={this.toggelPersonHandler}> Toggle Persons </button>
                {persons}
            </div>
           );
    
    }
}

export default App
