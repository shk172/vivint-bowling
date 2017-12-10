import React, { Component } from 'react';
import './App.css';

class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.player.name,
      scores: this.props.player.scores,
      newScore: 0,
      totalScore: 0,
      currentFrame: 0,
      currentRoll: 1,
    }

    this._addScore = this._addScore.bind(this);
    this._calculateTotal = this._calculateTotal.bind(this);
    this._handleStrike = this._handleStrike.bind(this);
    this._handleSpare = this._handleSpare.bind(this);
    this._resetScore = this._resetScore.bind(this);
    this._scoreChange = this._scoreChange.bind(this);
  }

  /*
  Handles adding new scores.
  */
  _addScore(){
    var scores = this.state.scores;
    //If this is the second roll and the combined score of the frame exceeds 10, then log error
    if(this.state.currentRoll === 2 &&
      Number(this.state.newScore) + Number(this.state.scores[this.state.currentFrame * 2]) > 10){
      console.log("You've rolled more than the number of pins!");
    }

    else{
      //If this is the second roll and the combined score of the frame is 10, mark it as a spare instead.
      if(this.state.currentRoll === 2 &&
        Number(this.state.newScore) + Number(this.state.scores[this.state.currentFrame * 2]) === 10){
        scores.push("/");
      }

      else{
        scores.push(this.state.newScore);
      }

      var totalScore = this.state.totalScore + Number(this.state.newScore);
      if(this.state.currentRoll === 2){
        this.setState({
          scores,
          newScore: 0,
          currentFrame: this.state.currentFrame + 1,
          currentRoll: 1,
          totalScore: totalScore
        })
      }
      else{
        this.setState({
          scores,
          newScore: 0,
          currentRoll: 2,
          totalScore: totalScore
        })
      }
    }
  }

  /*
  TODO: Implement a function to calculate total after each score update and
  handle the scoring with Strikes and Spares. For best performance, calculating
  on the go might be the better idea than calculating the total score anew each time
  */
  _calculateTotal(){
    console.log("Calculated");
  }

  /*
  *Handle Strikes, where if the current roll is the first one of the frame,
  *it will add X to the scoreboard and add 10 to the total score.
  *If it's not the first roll, then it does nothing, since you can't have
  *a strike on the second roll.
  */
  _handleStrike(){
    if(this.state.currentRoll === 1){
      var totalScore = this.state.totalScore + 10;
      var scores = this.state.scores;
      scores.push("X");
      scores.push("-");
      this.setState({
        scores,
        currentFrame: this.state.currentFrame + 1,
        currentRoll: 1,
        totalScore: totalScore,
      })
    }
    else{
      console.log("Cannot roll a strike when it's the second roll. Did you mean a spare?");
    }
  }

  /*
  *Handle Spares, where if the current roll is the second one of the frame,
  *it will add / to the scoreboard and add 10 - value of the first roll to the total score.
  *If it's not the second roll, then it does nothing, since you can't have
  *a spare on the second roll (it would be a strike).
  */
  _handleSpare(name){
    if(this.state.currentRoll === 2){
      var totalScore = this.state.totalScore + (10 - this.state.scores[(this.state.currentFrame * 2)]);
      var scores = this.state.scores;
      scores.push("/");
      this.setState({
        scores,
        currentRoll: 1,
        currentFrame: this.state.currentFrame + 1,
        totalScore: totalScore,
      });
    }
    else{
      console.log("Cannot roll a spare when it's the first roll. Did you mean a strike?")
    }
  }

  //Resets all scores from the scoreboard
  _resetScore(){
    this.setState({
      totalScore: 0,
      scores: [],
    })
  }

  //Handles the value of the dropdown menu input
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
              <th>Frame</th>
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
              <td>Total Score</td>
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
              <td>{this.state.totalScore}</td>
            </tr>
          </tbody>
        </table>
        <select value={this.state.newScore} onChange={this._scoreChange.bind(this)}>
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
        <button onClick={this._addScore}>Add Score</button>
        <button onClick={this._handleStrike}>Strike</button>
        <button onClick={this._handleSpare}>Spare</button>
        <button onClick={this._resetScore}>Reset Score</button>
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
