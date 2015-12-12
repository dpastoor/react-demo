import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    return (
       <div className="Counter">
           <h1 onClick={this.props.handleClick}> Player {data.name}
             with cards:
             {_.map(data.cards, (c) => c.name + " of " + c.suit + " ")}
           </h1>
       </div>
    );
  }
}



