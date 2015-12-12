import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="Counter">
           <h1> Player {this.props.data.name} </h1>
       </div>
    );
  }
}



