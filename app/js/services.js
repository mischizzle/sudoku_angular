'use strict';

/* Services */

var sudoku = angular.module('sudoku', []);

sudoku.factory('sudokuFactory', function() {
	return {

		getSolutionArray: function() {
			var thePuzzle = new Sudoku();
			thePuzzle.newGame();
			thePuzzle.solveGame();
			return thePuzzle.matrix;
		},

		getGameArray: function(n, indexArr, gameArr) {
			var difficultyArr = indexArr;
	    var gameArray = gameArr.slice(0);
	    var difficulty = n;
	    var randValue;

	    while(n){
	      randValue = Math.floor((Math.random()*difficultyArr.length)+1)
	      gameArray[randValue] = "_";
	      difficultyArr.splice(randValue,1);
	      n--
	    }  
	    return gameArray;
		},

		getIndexArray: function() {
			var gridArr = [];
	    for(var i=0; i<81; i++) {
	      gridArr[i] = i+1;
	    }
	    return gridArr;
		},

		verifyAnswer: function(n, index, gameArr, solutionArr) {
			console.log(n);
			console.log(gameArr[index]);
			console.log(solutionArr[index])
			if(n === solutionArr[index]) {
      	console.log("you're right smartie pants");
      	gameArr[index] = n;
      	return true;
    	} else {
      	console.log("wrong awnser stupid");
      	return false;
    	}
		}
	};
});

