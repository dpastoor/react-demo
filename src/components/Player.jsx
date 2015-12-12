import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    let cardValues = _.sum(_.pluck(data.cards, 'value'));
    return (
       <div className="Player" style={{color: (cardValues > 21) ? 'red' : 'black'}}>
           <h1 onClick={this.props.handleClick}> Player {data.name}
             with cards:
             {_.map(data.cards, (c) => c.name + " of " + c.suit + " ")}
           </h1>
       </div>
    );
  }
}



