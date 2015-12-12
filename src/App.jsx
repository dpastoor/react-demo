import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          counter: 0
      }
  }
  render() {
    return (
       <div className="App">
       <h1>hello from {this.props.name}</h1>
       </div>
    );
  }
}



