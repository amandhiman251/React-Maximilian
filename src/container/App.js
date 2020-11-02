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

        return(
            <div className = "App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button style = {style} onClick={this.toggelPersonHandler}> Toggle Persons </button>
                {this.state.showPerson?<div>
                <Person name = {this.state.person[0].name} age = {this.state.person[0].age}  />
                <Person name = {this.state.person[1].name} age = {this.state.person[1].age} change = {this.namechangeHandler } click={() => this.switchNameHandler("Balbir")} >My Hobbies: Racing </Person>
                <Person name = {this.state.person[2].name} age ={this.state.person[1].age} change = {this.onChangeHandler} />
                </div>: null}
            </div>
           );
    
    }
}

export default App
// this is ineffcient method use bind method instead