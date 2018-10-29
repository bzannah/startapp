import React, { Component } from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';

class App extends Component {
  state = {
    players: [
      { name: 'Messi', age: 20, id: 1 },
      { name: 'Xavi', age: 34, id: 2 },
      { name: 'Iniesta', age: 32, id: 3 }
    ]
  };

  addPlayer = (player) => {
    player.id = Math.random(4, 9);
    let players = [...this.state.players, player];
    this.setState({
      players: players
    });
  }

  deletePlayer = (id) => {
    let players = this.state.players.filter(player => {
      return player.id !== id;
    });
    this.setState({
      players: players
    });
  }


  componentDidMount() { // when component first mount 
    console.log('comp mounted');
  }

  componentDidUpdate(prevProps, prevState) { // when a state or props is changed 
    console.log('comp updated');
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>Player App</h1>
        <Players players={this.state.players} deletePlayer={this.deletePlayer} />
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    );
  }
}

export default App;
