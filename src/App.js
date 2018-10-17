import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
	  super(props);
	  this.state={
		  contatore:0
	  };
  }
  incrementa=(event)=>{
	this.setState({contatore: this.state.contatore+1}); 
  }
  decrementa=(event)=>{
	this.setState({contatore: this.state.contatore-1}); 
  }
  render() {
    return (
      <div id="root">
        <h1>Counter</h1>
		<div id="result">
			{this.state.contatore}
		</div>
		<button onClick={this.incrementa}> Incrementa </button>
		<button onClick={this.decrementa}> Decrementa </button>
      </div>
    );
  }
}

export default App;
