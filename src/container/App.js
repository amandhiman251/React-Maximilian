import React, {Component} from 'react';
import './App.css';
import Persons from '../Component/Persons/Persons';
import Cockpit from '../Component/Cockpit/Cockpit';

// have to move complete code in cockpit that belongs to cockpit 

class App extends Component {
     state={ 
         person : [
             { id: "asd", name : "Aman", age : "30"}, 
             { id: "ass", name : "Sweety", age : "27"}, 
             { id: "asa", name : "julie", age : "5"} 
         ],
         otherstate :'some other value',
         showPerson: false
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
    
        if(this.state.showPerson) {
        
            persons = (
            <div>
                <Persons 
                person ={this.state.person}
                clicked = {this.deletePersonHandler}
                changed = {this.namechangeHandler} />
            </div>
            );
            }
            
           
         
        return (
            <div  className = "App" >
                <Cockpit
                ttl ={this.props.title}
                showper = {this.state.showPerson}
                tgl = {this.toggelPersonHandler}
                st ={this.state.person} />
                {persons}
            </div>
           );
    
    }
}

export default App;