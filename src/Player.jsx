
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
  }
  _addCards() {
  	this.setState({
  		cards: this.state.cards.concat('cardX')
  	})
  }
  render() {
    return (
       <div onClick={this.props.handleClick} >
         Player {this.props.data.name} with:  {this.state.cards}
       </div>
    );
  }
}


