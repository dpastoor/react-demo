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
    return (
       <div className="Player" style={{color: (data.totalValue > 21) ? 'red' : 'black'}}>
           <h1 onClick={this.props.handleClick}> Player {data.name} cards, totaling: {data.totalValue}
             <ul>
               {_.map(data.cards, (c) => <Card data={c} />)}
             </ul>
           </h1>
       </div>
    );
  }
}
