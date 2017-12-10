import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      players: {},
      score: {},
      nameValue: "",
    }
  }

  componentDidMount(){

  }

  _addPlayer(){
    var players = this.state.players;
    players[this.state.nameValue] = {games: []};
    this.setState({
      players,
      nameValue: "",
    });
  }

  _handleStrike(name){
    console.log(name);
  }

  _handleSpare(name){
    console.log(name);
  }

  _updateNameValue(event){
    this.setState({
      nameValue: event.target.value
    })
  }

  _updateScore(){

  }

  render() {
    var playerScores = Object.keys(this.state.players).map((playerName)=>{
      return(
        <div key={{playerName}+"Scores"}>
          <table>
            <caption>{playerName}</caption>
            <tbody>
              <tr>
                <th>Game</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>Add Score</td>
              </tr>
              <tr>
                <th>Scores</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <select onChange={this._scoreChange}>
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
                  <button onClick={this._updateScore.bind(this)}>Add Score</button>
                  <button onClick={this._handleStrike.bind(this, playerName)}>Strike</button>
                  <button onClick={this._handleSpare.bind(this, playerName)}>Spare</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
