import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Game from './components/Game';
import Frame from './components/Frame';
import logo from './vivint-logo.png';

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
    var app = this;
    axios.get(url)
      .then(function(response){
        response.data.players.forEach((player)=>{
          console.log(player);
          Object.keys(player.game.frames).forEach((frame)=>{
            player.game.frames[frame] = new Frame(
              player.game.frames[frame].frameNumber,
              player.game.frames[frame].firstRoll,
              player.game.frames[frame].firstRollValue,
              player.game.frames[frame].secondRoll,
              player.game.frames[frame].secondRollValue,
              player.game.frames[frame].spare,
              player.game.frames[frame].strike,
              player.game.frames[frame].frameFinished,
              player.game.frames[frame].rollNumber);
          })
        })
        return response;
      }).then(function(response){
        app.setState({players: response.data.players});
      }).catch(function(error){
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
      game: {
        frames: {
          1: new Frame(1),
          2: new Frame(2),
          3: new Frame(3),
          4: new Frame(4),
          5: new Frame(5),
          6: new Frame(6),
          7: new Frame(7),
          8: new Frame(8),
          9: new Frame(9),
          10: new Frame(10),
        },
      }
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
        <Game key={player.name} player={player} url={url}/>
      )
    })

    return (
      <div className="App">
        <div className="Header">
          <img
            src={logo}
            alt="logo"
            style={{float: "left", margin: "5px"}}/>
          </div>
        <div className="Body">
          <div className="SideBar">
            <input
              type='text'
              style={{float: "right", height: '18px'}}
              value={this.state.nameValue}
              onChange={this._updateNameValue.bind(this)}
            />
            <button style={{float: "right", height: '24px'}} onClick={this._addPlayer.bind(this)}>Add a player</button>
          </div>
          <div className="Scores">
            {playerScores}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
