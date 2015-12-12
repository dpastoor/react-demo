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
  render() {
    let players = _.map(this.state.players, (player, i) => {
      return <Player data={player} key={i} />
    });
    return (
      <div className="App">
        <h1 onClick={this._addPlayer.bind(this)}> Add A Player </h1>
        {players}
      </div>
  );
  }
}



