import axios from 'axios';

function populate(){
	var testFrames = [];
	for(let i = 1; i <= 10; i++){
		var testFrame = {
			frameNumber: i,
			rollNumber: 1,
			frameFinished: false,
			strike: false,
			spare: false,
			firstRoll: "",
			firstRollValue: 0,
			secondRoll: "",
			secondRollValue: 0,
		}
		testFrames.push(testFrame);
	}
	var testGame = {
		frames: testFrames,
		totalScore: 0,
		currentFrame: 1,
		gameOver: false,
	}

	var testPlayer = {
		name: "SangHee",
		games: [testGame]
	}

	const url = "http://localhost:8000/v1/players"

	axios.post(url, testPlayer)
	.then(function(response){
		console.log(response);
	})
	.catch(function(error){
		console.log("Error with post command");
		//console.log(error);
	})
}

export default populate();
