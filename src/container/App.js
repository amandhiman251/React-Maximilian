import React, {useState} from 'react';
import './App.css';
import Person from '../component/Person/Person';


const App =  () => {
    // state={ 
    //     person : [
    //         { name : "Aman", age : "30"}, 
    //         {name : "Sweety", age : "27"}, 
    //         {name : "julie", age : "5"} 
    //     ],
    //     otherstate :'some other value'  
    // }
    const [personstate, setPersonState ] = 
    useState( {
     person :  [
            { name : "Aman", age : "30"}, 
            {name : "Sweety", age : "27"}, 
            {name : "julie", age : "5"} 
        ]
    });
    const [other, setother] = useState ({otherState :'some other value'});
    const switchNameHandler = () => {
        setPersonState({
       person : [
            { name : "Ajay", age : "30"}, 
            {name : "Sweety", age : "27"}, 
            {name : "khushi", age : "15"}
            ]
        });
        setother({otherState: 'some value'});
        // this.setState ({
        //     person : [
        //         { name : "Karan", age : "30"}, 
        //         {name : "Sweety", age : "27"}, 
        //         {name : "julie", age : "50"} 
        //     ]  }
        // )
    };

    //render(){
        return(
            <div className = "App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button onClick={switchNameHandler}> Switch Name </button>
                <Person name = {personstate.person[0].name} age = {personstate.person[0].age} />
                <Person name = {personstate.person[1].name} age = {personstate.person[1].age} >My Hobbies: Racing </Person>
                <Person name = {personstate.person[2].name} age ={personstate.person[1].age} />
                <p> {other.otherState}</p>
            </div>
           );
    
    }
//}

export default App