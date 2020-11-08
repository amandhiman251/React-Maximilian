import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../Component/Persons/Persons';
import Cockpit from '../Component/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

/*If you want to display that which type of props 
your app will accept than you have to install first
 a pacakage npm instal --save prop-types*/

class App extends Component {
    constructor(props){
        super(props);
        console.log("App.js Constructor");
    }
     state={ 
         person : [
             { id: "asd", name : "Aman", age : 30}, 
             { id: "ass", name : "Sweety", age : 27}, 
             { id: "asa", name : "julie", age : 5} 
         ],
         otherstate :'some other value',
         showPerson: false,
         showCockpit: true,
         changeCounter: 0,
         authentication: false
     }
     static getDerivedStateFromProps(props, state){
         console.log("App.js GetDerivedStateFromProps",props);
         return state;
     }
     componenWillMount(){
         console.log("App.js componentWilMount");
     }

     componentDidMount(){
         console.log("App.js componentDidMount");
     }

     shouldComponentUpdate(nextProps, nextState){
         console.log('[App.js] shouldComponentUpdate');
         return true;
     }

     componentDidUpdate(){
         console.log('[App.js] componentDidUpdate')
     }

     toggelPersonHandler = () => {
        this.setState( {showPerson: !this.state.showPerson} );
     }

     loginHandler= () => {
         this.setState({authentication: true})
     }
    
    namechangeHandler =(event, id) => {
        const personIndex = this.state.person.findIndex(p => { 
            return p.id === id});
        const per1 = {...this.state.person[personIndex]};
        per1.name =event.target.value;
        const per2 =[...this.state.person];
        per2[personIndex] = per1;
        this.setState((prevState, props) => {
            return { person:per2, 
            changeCounter: prevState.changeCounter+1};
        });
    };
     
    deletePersonHandler = (personIndex) => {
        //const abc = this.state.person.slice(); both this way creates a original copy of the array not copy only the pointer/reference
        const abc = [...this.state.person];
        abc.splice(personIndex, 1);
        this.setState({person:abc});
    }


    render() {
        console.log("APP,js Render");
        let persons = null;
     
    
        if(this.state.showPerson) {
        
            persons = (
            <div>
                <Persons 
                person ={this.state.person}
                isauthenticated = {this.state.authentication}
                clicked = {this.deletePersonHandler}
                changed = {this.namechangeHandler} />
            </div>
            );
            }
            
           
         
        return (
            
            
                <Auxiliary>
                <button onClick = {() => this.setState({showCockpit: false})}> Remove Cockpit</button>
                {this.state.showCockpit?<Cockpit
                login={this.loginHandler}
                ttl ={this.props.title}
                showper = {this.state.showPerson}
                tgl = {this.toggelPersonHandler}
                personLength ={this.state.person.length} />:null}
                {persons}
                </Auxiliary>
           );
    
    }
}

export default withClass(App, classes.App);