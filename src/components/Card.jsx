import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {GridList, GridTile} from 'material-ui';
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;
    return (
      <li style={{display: 'inline'}}> {data.name + " of " + data.suit} </li>
    );
  }
}
