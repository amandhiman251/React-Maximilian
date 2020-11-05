import React, {Component} from 'react';
import aman from  './App.module.css';
import Person from '../component/Person/Person';

// using css module allow us to seperate css and js code and also enable us to styling in  individual element scope using unique css class name for each element

class App extends Component {
     state={ 
         person : [
             { id: "asd", name : "Aman", age : "30"}, 
             { id: "ass", name : "Sweety", age : "27"}, 
             { id: "asa", name : "julie", age : "5"} 
         ],
         otherstate :'some other value',
         showPerson: false,
         ame: "App"  
     }

     toggelPersonHandler = () => {
        this.setState( {showPerson: !this.state.showPerson} );
     }
    
    namechangeHandler =(event, id) => {
        const personIndex = this.state.person.findIndex(p => { 
            return p.id === id});
        const per1 = {...this.state.person[personIndex]};
        per1.name =event.target.value;
        const per2 =[...this.state.person];
        per2[personIndex] = per1;
        this.setState({person:per2})
    }
     
    deletePersonHandler = (personIndex) => {
        //const abc = this.state.person.slice(); both this way creates a original copy of the array not copy only the pointer/reference
        const abc = [...this.state.person];
        abc.splice(personIndex, 1);
        this.setState({person:abc});
    }


    render() {
        let persons = null;
        let btnClass = "";
    
        if(this.state.showPerson) {
        
            persons = (
            <div>
                {this.state.person.map((person, index) => { 
                    return <Person 
                    per ={this.state.person.length}
                    name = {person.name} 
                    age = {person.age}
                    key= {person.id} 
                    click = {() => this.deletePersonHandler(index)}
                    changed ={(event) => this.namechangeHandler(event, person.id)} />
                    })}
                
                </div>
            );
            btnClass = aman.Red;
            }
           const classes =[];
           if(this.state.person.length <= 2 ) {
               classes.push(aman.red);
           }
           if(this.state.person.length <= 1 ) {
            classes.push(aman.bold);
        }
         
        return (
            <div  className = {aman.App} >
                <h1> Hi, I am a React App</h1>
                <p className = {classes.join(" ")}>This is really working!</p>
                <button className= {btnClass} onClick={this.toggelPersonHandler}> Toggle Persons </button>
                {persons}
            </div>
           );
    
    }
}

export default App;