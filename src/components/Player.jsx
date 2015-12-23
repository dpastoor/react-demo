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
               {_.map(data.cards, (c, i) => <Card data={c} key={i} />)}
             </ul>
           </h1>
       </div>
    );
  }
}

Player.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.number,
    cards: React.PropTypes.array,
    totalValue: React.PropTypes.number
  }).isRequired,
  handleClick: React.PropTypes.func
};
