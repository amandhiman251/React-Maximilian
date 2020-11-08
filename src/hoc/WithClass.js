import React from 'react';

const withClass = props => <div className = {props.clas}>{props.children}</div>
export default withClass;