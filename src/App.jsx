import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import Player from './components/Player.jsx';
import initDeck from './functions/initDeck'
import _ from 'lodash'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      availableCards: []
    }
  }
  addPlayer() {
    this.setState({
      players: this.state.players.concat({
        name: this.state.players.length + 1,
        cards: []
      })
    })
  }
  addCard(playerIndex) {
    let players = this.state.players;
    let cards = this.state.availableCards;
    let card = cards.pop();
    players[playerIndex].cards = this.state.players[playerIndex].cards.concat(card);
    this.setState({
      players: players,
      availableCards: cards
    })
  }
  clearCards(playerIndex) {
    let players = this.state.players;
    players[playerIndex].cards = [];
    this.setState({
      players: players
    })
  }
  shuffleCards() {
    let players = _.map(this.state.players, (p) => {
      return {name: p.name, cards: []}
    });
    this.setState({
      availableCards: _.shuffle(initDeck(1)),
      players: players
    })
  }
  deal() {
    if (this.state.availableCards.length < 20) {
      this.shuffleCards();
      console.log('reshuffling')
      return;
    }
    _.forEach(this.state.players, (p, i) => {
      this.clearCards(i);
      this.addCard(i);
      this.addCard(i);
    })
  }
  render() {
    let players = _.map(this.state.players, (player, i) => {
      return <Player data={player} key={i} handleClick={this.addCard.bind(this, i)} />
    });
    return (
      <div className="App">
        <div>
          <RaisedButton label="Add a Player" onClick={this.addPlayer.bind(this)} />
          <RaisedButton label="Shuffle Cards" onClick={this.shuffleCards.bind(this)} />
          <RaisedButton label="Deal" onClick={this.deal.bind(this)} />
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



