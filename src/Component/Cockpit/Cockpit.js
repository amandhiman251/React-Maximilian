import React, {useEffect} from 'react';
import aman from  './Cockpit.module.css';


const Cockpit =(props) => {
    useEffect(()=>
    console.log('[Cockpit.js] useEffect)')
    )
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