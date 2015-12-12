import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    return (
       <div className="Counter">
           <h1 onClick={this.props.handleClick}> Player {data.name} with cards: {data.cards} </h1>

       </div>
    );
  }
}



