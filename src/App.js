import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'
import uuid from 'uuid';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: uuid() },
      { name: 'Yoshi', age: 20, belt: 'green', id: uuid() },
      { name: 'Crystal', age: 25, belt: 'pink', id: uuid()}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = uuid();
    console.log(ninja.id);
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
