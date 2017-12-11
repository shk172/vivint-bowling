function Frame(frameNumber){
  this.frameNumber = frameNumber;
  this.rollNumber = 1;
  this.frameFinished = false;

  this.strike = false;
  this.spare = false;

  this.firstRoll = null;
  this.secondRoll = null;

  //These two variables will be used in case of Strike and Spare, to replace X and /.
  this.firstRollValue = 0;
  this.secondRollValue = 0;

  this.getTotalScore = function(){
    return this.firstRollValue + this.secondRollValue;
  }

  this.setStrike = function(){
    this.strike = true;
    this.firstRoll = "X";
    this.firstRollValue = 10;
    this.secondRoll = "-";
    this.secondRollValue = 0;
    this.setFinished();
  }

  this.isStrike = function(){
    return this.strike;
  }

  this.setSpare = function(){
    this.spare = true;
    this.secondRoll = "/";
    this.secondRollValue = 10 - this.firstRollValue;
    this.setFinished();
  }

  this.isSpare = function(){
    return this.spare
  }

  this.setFinished = function(){
    this.rollNumber = -1;
    this.frameFinished = true;
  }

  this.isFinished = function(){
    return this.frameFinished;
  }

  this.addScore = function(score){
    switch(this.rollNumber){
      case 1:
        this.firstRoll = score;
        this.firstRollValue = Number(score);
        this.nextRoll();
        break;
      case 2:
        this.secondRoll = score;
        this.secondRollValue = Number(score);
        this.setFinished();
        break;
      default:
        break;
    }
  }

  this.getCurrentRoll = function(){
    return this.rollNumber;
  }

  this.nextRoll = function(){
    this.rollNumber = 2;
  }

  this.getFirstRoll = function(){
    return this.firstRoll;
  }
  this.getFirstRollValue = function(){
    return this.firstRollValue;
  }
  this.getSecondRoll = function(){
    return this.secondRoll;
  }
  this.getSecondRollValue = function(){
    return this.secondRollValue;
  }
}

export default Frame;
