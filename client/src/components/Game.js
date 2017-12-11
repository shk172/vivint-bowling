import React, { Component } from 'react';
import Frame from './Frame'

class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.player.name,
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
      newScore: 0,
      totalScore: 0,
      currentFrame: 1,
      gameOver: false,
    }
    this._addScore = this._addScore.bind(this);
    this._calculateTotal = this._calculateTotal.bind(this);
    this._handleStrike = this._handleStrike.bind(this);
    this._handleSpare = this._handleSpare.bind(this);
    this._resetScore = this._resetScore.bind(this);
    this._scoreChange = this._scoreChange.bind(this);
  }

  componentDidUpdate(){
    if(this.state.currentFrame === 11){
      this.setState({
        currentFrame: this.state.currentFrame + 1,
        gameOver: true,
      })
    }
  }

  /*
  Handles adding new scores.
  */
  _addScore(){
    if(!this.state.gameOver){
      var newScore = this.state.newScore;
      var frames = this.state.frames;
      var currentFrame = this.state.currentFrame;
      frames[currentFrame].addScore(newScore);
      var totalScore = this._calculateTotal(frames, currentFrame);
      if(frames[currentFrame].isFinished()){
        currentFrame += 1;
      }
      this.setState({
        frames,
        currentFrame,
        newScore: 0,
        totalScore,
      });
    }
  }

  _calculateTotal(frames, currentFrame){
    var totalScore = 0;
    console.log(currentFrame);
    for(var i = 1; i <= currentFrame; i++){
      totalScore += frames[i].getTotalScore();
      if(i < currentFrame && frames[i].isStrike()){
        if(i < currentFrame - 1 && frames[i + 1].isStrike())
          totalScore += frames[i + 2].getFirstRollValue();
        totalScore += frames[i + 1].getTotalScore();
      }
      else if (i < currentFrame && frames[i].isSpare()){
        totalScore += frames[i + 1].getFirstRollValue();
      }
    }
    return totalScore;
  }

  /*
  *Handle Strikes, where if the current roll is the first one of the frame,
  *it will add X to the scoreboard and add 10 to the total score.
  *If it's not the first roll, then it does nothing, since you can't have
  *a strike on the second roll.
  */
  _handleStrike(){
    if(!this.state.gameOver){
      var frames = this.state.frames;
      var currentFrame = this.state.currentFrame;
      if(frames[currentFrame].getCurrentRoll() === 1){
        frames[currentFrame].setStrike();
        var totalScore = this._calculateTotal(frames, currentFrame);
        this.setState({
          frames,
          currentFrame: currentFrame + 1,
          totalScore
        })
      }
      else{
        alert("Cannot roll a strike when it's the second roll. Did you mean a spare?");
      }
    }
  }

  /*
  *Handle Spares, where if the current roll is the second one of the frame,
  *it will add / to the scoreboard and add 10 - value of the first roll to the total score.
  *If it's not the second roll, then it does nothing, since you can't have
  *a spare on the second roll (it would be a strike).
  */
  _handleSpare(name){
    if(!this.state.gameOver){
      var frames = this.state.frames;
      var currentFrame = this.state.currentFrame;
      if(frames[currentFrame].getCurrentRoll() === 2){
        frames[currentFrame].setSpare();
        var totalScore = this._calculateTotal(frames, currentFrame);
        this.setState({
          frames,
          currentFrame: currentFrame + 1,
          totalScore,
        })
      }
      else{
        alert("Cannot roll a spare when it's the first roll. Did you mean a strike?")
      }
    }
  }

  //Resets all scores from the scoreboard
  _resetScore(){
    this.setState({
      gameOver: false,
      currentFrame: 1,
      totalScore: 0,
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
              <td>{this.state.frames[1].getFirstRoll()}</td>
              <td>{this.state.frames[1].getSecondRoll()}</td>
              <td>{this.state.frames[2].getFirstRoll()}</td>
              <td>{this.state.frames[2].getSecondRoll()}</td>
              <td>{this.state.frames[3].getFirstRoll()}</td>
              <td>{this.state.frames[3].getSecondRoll()}</td>
              <td>{this.state.frames[4].getFirstRoll()}</td>
              <td>{this.state.frames[4].getSecondRoll()}</td>
              <td>{this.state.frames[5].getFirstRoll()}</td>
              <td>{this.state.frames[5].getSecondRoll()}</td>
              <td>{this.state.frames[6].getFirstRoll()}</td>
              <td>{this.state.frames[6].getSecondRoll()}</td>
              <td>{this.state.frames[7].getFirstRoll()}</td>
              <td>{this.state.frames[7].getSecondRoll()}</td>
              <td>{this.state.frames[8].getFirstRoll()}</td>
              <td>{this.state.frames[8].getSecondRoll()}</td>
              <td>{this.state.frames[9].getFirstRoll()}</td>
              <td>{this.state.frames[9].getSecondRoll()}</td>
              <td>{this.state.frames[10].getFirstRoll()}</td>
              <td>{this.state.frames[10].getSecondRoll()}</td>
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
        <button onClick={this._handleSpare}>Spare</button>
        <button onClick={this._handleStrike}>Strike</button>
        <button onClick={this._resetScore}>Reset Score</button>
      </div>
    )
  }
}

export default Game;
