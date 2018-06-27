import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

const One = props =>
<div className="box"> One {props.children} </div>

const Two = props =>
<div className='box'> Two {props.children} </div>

const Three = props =>
<div className='box'> Three {props.children}</div>

const components = [One, Two, Three ];

export default class Recursion extends Component {
	render() {
  	return (
    	<div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
