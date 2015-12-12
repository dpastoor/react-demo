import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          counter: 0
      }
  }
  componentWillMount() {
      setInterval(() => {
          this.setState({
              counter: this.state.counter + 1
          })
      }, 1000)
  }
  _resetCounter() {
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
       <div className="App">
           <h1>hello from {this.props.name}</h1>
           <h1 onClick={this._resetCounter.bind(this)}>Counter value:  {this.state.counter}</h1>
       </div>
    );
  }
}



