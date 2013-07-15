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

			gameObj.cellArr = [this.cell(1,3), this.cell(2,4), this.cell(3,5)];
			gameObj.gameMatrix = gameArray;
			gameObj.solutionMatrix = solution;
			gameObj.levelNum = levelNum;

			console.log(gameObj);
			console.log(gameObj.cellArr[0]);
			console.log(gameObj.cellArr[0].getCellId());

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
		},

		cell: function(id, answerValue) {
			//Create the cell object
			var cell;
	
			function Cell(cellId, cellAnswerValue) {
				this.id = cellId,
				this.answerValue = cellAnswerValue;
				this.hints = [];
				this.mutable = false;
			}

			Cell.prototype.getCellId = function() {
				return this.id;
			}

			Cell.prototype.getCellAnswerValue = function() {
				return this.answerValue;
			}

			Cell.prototype.addHint = function(n) {
				var duplicate = false;
				for(var i = 0; i<this.hints.length; i++) {
					if(this.hints[i] === n) {
						duplicate = true;
					}
				}
				if(!duplicate) {
					this.hints.push(n);
				}
				//reorder
			}

			Cell.prototype.addRemoveHint = function(n) {
				//if hint is in hint array, remove it
				//slice array
				//reorder
				this.hints.pop(n);
			}

			Cell.prototype.getHitsArray = function() {
				return this.hints;
			}

			cell = new Cell(id, answerValue);

			return cell;
		}
	};
});

