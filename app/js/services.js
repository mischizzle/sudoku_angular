'use strict';

/* Services */

var sudoku = angular.module('sudoku', []);

sudoku.factory('sudokuFactory', function() {

	return {
		newGame: function(level) {
			var solution = this.generateSolution();
			var level = this.processLevel(level);
  		var gameObj = this.generateGameObj(level, solution);

			return gameObj;
		},

		generateSolution: function() {
			var thePuzzle = new Sudoku();
			thePuzzle.newGame();
			thePuzzle.solveGame();

			return thePuzzle.matrix;
		},

		generateGameObj: function(level, solution) {
	    var gameArray = solution.slice(0);
	   	var gameObj = {};
	   	var tmpArr = [];
	   	var randValue;
	   	var randIndex;

	   	for(var i=0; i<81; i++) {
	   		tmpArr[i] = i;
	   	}

	    while(level){
	      randIndex = Math.floor((Math.random() * tmpArr.length) + 1);
	      randValue = tmpArr[randIndex];
	      gameArray[randValue] = "_";
	      tmpArr.splice(randIndex, 1);
	      level--
	    }  

	    gameObj.gameMatrix = gameArray;
	    gameObj.solutionMatrix = solution;

	    return gameObj;
		},

		processLevel: function(level) {
			var levelValue = 0;
			switch(level) {
				case("easy"):
					levelValue = 20;
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
		}
	};
});

