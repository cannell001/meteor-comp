import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Ninjas} from './../api/ninjas';

export default class Ninja extends Component {
  render() {
    return (
      <p key={this.props.ninja._id}>
        {this.props.ninja.name} has {this.props.ninja.score} point(s).
        <button onClick={() => {
          Ninjas.update(this.props.ninja._id, {$inc: {score: -1}});
        }}>-1</button>
        <button onClick={() => {
          Ninjas.update(this.props.ninja._id, {$inc: {score: 1}});
        }}>+1</button>
        <button onClick={() => Ninjas.remove(this.props.ninja._id)}>X</button>
      </p>
    );
  }
};

// Setup prop types. ninja should be a required object
Ninja.propTypes = {
  ninja: PropTypes.object.isRequired
};
