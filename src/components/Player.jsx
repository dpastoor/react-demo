import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
  }
  _addCard() {
    this.setState({
      cards: this.state.cards.concat(Math.floor(Math.random()*10))
    })
  }
  render() {
    return (
       <div className="Counter">
           <h1 onClick={this._addCard.bind(this)}> Player {this.props.data.name} with cards: {this.state.cards} </h1>

       </div>
    );
  }
}



