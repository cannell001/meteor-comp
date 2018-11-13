import React, { Component } from 'react';

import {Ninjas} from './../api/ninjas';

export default class AddNinja extends Component {
  handleSubmit = (e) => {
    let ninjaName = e.target.ninjaName.value;

    e.preventDefault();

    if (ninjaName) {
      e.target.ninjaName.value = '';
      Ninjas.insert({
        name: ninjaName,
        score: this.props.score
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="ninjaName" placeholder="Ninja name"/>
          <button>Add Ninja</button>
        </form>
      </div>
    );
  }
};
