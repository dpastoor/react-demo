import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import Player from './components/Player.jsx';
import _ from 'lodash'
import './css/styles.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }
  _addPlayer() {
    this.setState({
      players: this.state.players.concat({
        name: this.state.players.length + 1,
        cards: []
      })
    })
  }
  _addCard(playerIndex) {
    let players = this.state.players;
    players[playerIndex].cards = this.state.players[playerIndex].cards.concat(Math.floor(Math.random()*10))
    this.setState({
      players: players
    })
  }
  render() {
    let players = _.map(this.state.players, (player, i) => {
      return <Player data={player} key={i} handleClick={this._addCard.bind(this, i)} />
    });
    return (
      <div className="App">
        <RaisedButton label="Add a Player" onClick={this._addPlayer.bind(this)} />
        {players}
        <div>All card values played: </div>
      </div>
  );
  }
}



