import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import Player from './components/Player.jsx';
import initDeck from './functions/initDeck'
import _ from 'lodash'
import './css/styles.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      availableCards: []
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
    let cards = this.state.availableCards;
    let card = cards.pop();
    players[playerIndex].cards = this.state.players[playerIndex].cards.concat(card);
    this.setState({
      players: players,
      availableCards: cards
    })
  }
  _shuffleCards() {
    let players = _.map(this.state.players, (p) => {
      return {name: p.name, cards: []}
    });
    this.setState({
      availableCards: _.shuffle(initDeck(1)),
      players: players
    })
  }
  render() {
    let players = _.map(this.state.players, (player, i) => {
      return <Player data={player} key={i} handleClick={this._addCard.bind(this, i)} />
    });
    return (
      <div className="App">
        <div>
          <RaisedButton label="Add a Player" onClick={this._addPlayer.bind(this)} />
          <RaisedButton label="Shuffle Cards" onClick={this._shuffleCards.bind(this)} />
        </div>
        {players}
        <div>
          <h1>
            Cards left: {this.state.availableCards.length}
          </h1>
          {_.map(this.state.availableCards, (c) => {
          return (
            <div>
              {c.name + " of " + c.suit + " "}
            </div>
            )
          })}</div>
      </div>
  );
  }
}



