import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter.jsx';
import _ from 'lodash'
import './css/styles.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [1]
    }
  }
  render() {
    let counters = _.map(this.state.counters, (c) => {
      return <Counter name={c} />
    });
    return (
      <div className="App">
        <h1>hello from {this.props.name}</h1>
        {counters}
      </div>
  );
  }
}



