import React from 'react';

const withClass = (ComponentToBeWrapped, classToBeUsed ) =>{
return props => <div className = {classToBeUsed}><ComponentToBeWrapped /></div>};
export default withClass;