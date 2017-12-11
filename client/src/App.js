import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Game from './components/Game'

const url = 'http://localhost:8000/v1/players';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      players: [],
      nameValue: "",
    }
  }

  componentDidMount(){
    axios.get(url)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  _addPlayer(){
    if(this.state.nameValue.length === 0){
      alert("Please type a value for the name.")
      return;
    }
    var players = this.state.players;
    var player = {
      name: this.state.nameValue,
      games: []
    };
    players.push(player);
    this.setState({
      players,
      nameValue: "",
    }, function(){
      axios.post(url, player)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log('Error with POST command');
        console.log(error);
      })
    });
  }

  _updateNameValue(event){
    this.setState({
      nameValue: event.target.value
    })
  }



  render() {
    var playerScores = this.state.players.map((player)=>{
      return(
        <Game key={player.name} player={player}/>
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
