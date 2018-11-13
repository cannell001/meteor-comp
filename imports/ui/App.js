import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddNinja from './AddNinja';
import NinjaList from './NinjaList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title}/>
        <NinjaList ninjas={this.props.ninjas}/>
        <AddNinja/>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  ninjas: PropTypes.array.isRequired
};
