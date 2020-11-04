import React, {Component} from 'react';
import './App.css';
import Person from '../component/Person/Person';
import styled from 'styled-components';


// to use styled component library use npm install --save styled-components on vs terminal
const StyledButton = styled.button`
    background-color: green;
    color : white;
    font: inherit;
    border: 1px solid blue;
    pading: 8px;
    cursor: pointer;

    &:hover{
        background-color: lightgreen;
        color: black;
    }
`;
class App extends Component {
     state={ 
         person : [
             { id: "asd", name : "Aman", age : "30"}, 
             { id: "ass", name : "Sweety", age : "27"}, 
             { id: "asa", name : "julie", age : "5"} 
         ],
         otherstate :'some other value',
         showPerson: true,
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
        const style = null;
        let persons = null;
        if(this.state.showPerson) {
        
            persons = (
            <div>
                {this.state.person.map((person, index) => { 
                    return <Person 
                    name = {person.name} 
                    age = {person.age}
                    key= {person.id} 
                    click = {() => this.deletePersonHandler(index)}
                    changed ={(event) => this.namechangeHandler(event, person.id)} />
                    })}
                
                </div>
            );
            //style.backgroundColor = "red";
            }
           const classes =[];
           if(this.state.person.length <= 2 ) {
               classes.push("red");
           }
           if(this.state.person.length <= 1 ) {
            classes.push("bold");
        }
         
        return (
            <div  className = "App" >
                <h1> Hi, I am a React App</h1>
                <p className = {classes.join(" ")}>This is really working!</p>
                <StyledButton  onClick={this.toggelPersonHandler}> Toggle Persons </StyledButton>
                {persons}
            </div>
           );
    
    }
}

export default App;