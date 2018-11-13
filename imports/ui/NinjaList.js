import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Ninja from './Ninja';

export default class NinjaList extends Component {
    renderNinjas() {
      if (this.props.ninjas.length === 0) {
        return <p>Add your first ninja to get started!</p>;
      } else {
        return this.props.ninjas.map((ninja) => {
          return <Ninja key={ninja._id} ninja={ninja} />;
        });
      }
    }
  render() {
    return (
      <div>
        {this.renderNinjas()}
      </div>
    );
  }
};

NinjaList.propTypes = {
  ninjas: PropTypes.array.isRequired
}
