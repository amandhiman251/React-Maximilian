import React from 'react';

const withClass = (ComponentToBeWrapped, classToBeUsed ) =>{
return props => <div className = {classToBeUsed}><ComponentToBeWrapped {...props}/></div>};
export default withClass;