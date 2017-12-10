import React, { Component } from 'react';
import './App.css';
import Game from './components/Game'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      players: {},
      nameValue: "",
    }
  }

  componentDidMount(){

  }

  _addPlayer(){
    var players = this.state.players;
    players[this.state.nameValue] = {
      name: this.state.nameValue,
      scores: []
    };
    this.setState({
      players,
      nameValue: "",
    });
  }

  _updateNameValue(event){
    this.setState({
      nameValue: event.target.value
    })
  }



  render() {
    var playerScores = Object.keys(this.state.players).map((playerName)=>{
      return(
        <Game key={playerName} player={this.state.players[playerName]}/>
      )
    })

    return (
      <div className="App">
        {playerScores}
        <input
          type='text'
          value={this.state.nameValue}
          onChange={this._updateNameValue.bind(this)}
        />
        <button onClick={this._addPlayer.bind(this)}>Add a player</button>
      </div>
    );
  }
}

export default App;
