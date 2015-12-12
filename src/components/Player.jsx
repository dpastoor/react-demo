import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
  }
  render() {
    return (
       <div className="Counter">
           <h1 onClick={this.props.handleClick}> Player {this.props.data.name} with cards: {this.state.cards} </h1>

       </div>
    );
  }
}



