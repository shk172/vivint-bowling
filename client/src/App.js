import React, { Component } from 'react';
import './App.css';

class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.player.name,
      scores: this.props.player.scores,
      newScore: 0,
    }
  }

  _addScore(){
    var scores = this.state.scores;
    scores.push(this.state.newScore);
    this.setState({
      scores,
      newScore: 0,
    })
  }

  _handleStrike(name){
    console.log(name);
  }

  _handleSpare(name){
    console.log(name);
  }

  _scoreChange(event){
    this.setState({
      newScore: event.target.value,
    });
  }

  render(){
    return(
      <div key={this.state.name+"Scores"}>
        <table>
          <caption>{this.state.name}</caption>
          <tbody>
            <tr>
              <th>Game</th>
              <td colSpan="2">1</td>
              <td colSpan="2">2</td>
              <td colSpan="2">3</td>
              <td colSpan="2">4</td>
              <td colSpan="2">5</td>
              <td colSpan="2">6</td>
              <td colSpan="2">7</td>
              <td colSpan="2">8</td>
              <td colSpan="2">9</td>
              <td colSpan="2">10</td>
            </tr>
            <tr>
              <th>Scores</th>
              <td>{this.state.scores[0]}</td>
              <td>{this.state.scores[1]}</td>
              <td>{this.state.scores[2]}</td>
              <td>{this.state.scores[3]}</td>
              <td>{this.state.scores[4]}</td>
              <td>{this.state.scores[5]}</td>
              <td>{this.state.scores[6]}</td>
              <td>{this.state.scores[7]}</td>
              <td>{this.state.scores[8]}</td>
              <td>{this.state.scores[9]}</td>
              <td>{this.state.scores[10]}</td>
              <td>{this.state.scores[11]}</td>
              <td>{this.state.scores[12]}</td>
              <td>{this.state.scores[13]}</td>
              <td>{this.state.scores[14]}</td>
              <td>{this.state.scores[15]}</td>
              <td>{this.state.scores[16]}</td>
              <td>{this.state.scores[17]}</td>
              <td>{this.state.scores[18]}</td>
              <td>{this.state.scores[19]}</td>
            </tr>
          </tbody>
        </table>
        <select onChange={this._scoreChange.bind(this)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <button onClick={this._addScore.bind(this)}>Add Score</button>
        <button onClick={this._handleStrike.bind(this, this.state.name)}>Strike</button>
        <button onClick={this._handleSpare.bind(this, this.state.name)}>Spare</button>
      </div>
    )
  }
}


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
