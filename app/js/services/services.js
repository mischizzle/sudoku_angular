'use strict';

/* Services */

myAwesomeApp.factory('SudokuGame', 
	function SudokuGame() {

	return {
		newGame: function(level) {
			var solution = this.generateSolution();
			var levelNum = this.processLevel(level);
			var gameObj = this.generateGameObj(levelNum, solution);

			return gameObj;
		},

		generateSolution: function() {
			var thePuzzle = new Sudoku();
			thePuzzle.newGame();
			thePuzzle.solveGame();

			return thePuzzle.matrix;
		},

		generateGameObj: function(levelNum, solution) {
			var gameArray = solution.slice(0);
			var gameObj = {};
			var tmpArr = [];
			var count = levelNum;
			var randValue;
			var randIndex;

			for(var i=0; i<81; i++) {
				tmpArr[i] = i;
			}

			while(count){
				randIndex = Math.floor((Math.random() * tmpArr.length) + 1);
				randValue = tmpArr[randIndex];
				gameArray[randValue] = "_";
				tmpArr.splice(randIndex, 1);
				count--
			}  

			gameObj.gameMatrix = gameArray;
			gameObj.solutionMatrix = solution;
			gameObj.levelNum = levelNum;

			return gameObj;
		},

		processLevel: function(level) {
			var levelValue = 0;
			switch(level) {
				case("easy"):
				levelValue = 10;
				break;
				case("medium"):
				levelValue = 40;
				break;
				case("hard"):
				levelValue = 60;
				break;
				case("impossible"):
				levelValue = 70;
				break;
			}
			console.log("progress level");
			console.log(levelValue);
			return levelValue;
		},

		verifyAnswer: function(n, index, gameObj) {
			if(n === gameObj.solutionMatrix[index]) {
				gameObj.gameMatrix[index] = n;
				console.log("you're right smartie pants");
				return true;
			} else {
				console.log("wrong awnser stupid");
				return false;
			}
		},

		getPendingAnswers: function(gameObj) {
			var count = 0;
			for(var i=0; i<gameObj.gameMatrix.length; i++) {
				if(gameObj.gameMatrix[i] === "_") {
					count++;
				}
			}
			return count;
		},

		getAnsweredPercentage: function(gameObj) {

			var pendingAnswers = this.getPendingAnswers(gameObj);
			var total = gameObj.levelNum;
			var ansered = total - pendingAnswers;
			var percentage = Math.floor((ansered/total)*100);

			return percentage;
		}
	};
});

