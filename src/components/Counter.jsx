import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
       <div className="Counter">
           <h1 onClick={this._resetCounter.bind(this)}>Counter {this.props.name} value:  {this.state.counter}</h1>
       </div>
    );
  }
}



