import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Card from './Card.jsx'
import {GridList, GridTile} from 'material-ui';
export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    let cardValues = _.sum(_.pluck(data.cards, 'value'));
    return (
       <div className="Player" style={{color: (cardValues > 21) ? 'red' : 'black'}}>
           <h1 onClick={this.props.handleClick}> Player {data.name} cards :
             <ul>
               {_.map(data.cards, (c) => <Card data={c} />)}
             </ul>
             totaling: {cardValues}
           </h1>
       </div>
    );
  }
}
