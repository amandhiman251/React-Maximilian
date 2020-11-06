import React, {useEffect} from 'react';
import aman from  './Cockpit.module.css';

// use []if you want to use it only once when component render
const Cockpit =(props) => {
//     useEffect(()=> {
//     console.log('[Cockpit.js] useEffect');
//     setTimeout(()=>{
//         alert("useEffect");
//     },1000);
// },[]);
//use an component inside[props.Persons] if you want to run for this
useEffect(()=> {
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
        alert("useEffect");
    },1000);
},[props.Persons]);
// you can use as many time as you want useEffect and you can pass many arguments to [a,b,c,c]

    const classes =[];
           if(props.st.length <= 2 ) {
               classes.push(aman.red);
           }
           if(props.st.length <= 1 ) {
            classes.push(aman.bold);
        }
        let btnClass = null;
        if(props.showper) {
             btnClass = aman.Red;
         }
    return(
        <div className= {aman.Cockpit}>
            <h1>{props.ttl}</h1>
            <p className = {classes.join(" ")}>This is really working!</p>
            <button className = {btnClass} onClick={props.tgl} > Toggle Person </button>
        </div>
            );
}

export default Cockpit;