'use strict';

/* Controllers */
function SudokuCtrl($scope) {

  var solutionArr = SudokuSolutionArr();

  $scope.title = "Sudoku, with AngularJS";
  $scope.difficulty = "Easy";

  //$scope.gameSolutionArr = SudokuSolutionArr();

  $scope.gameGrid = SudokuGameArr(20, solutionArr);
  $scope.permissions = false;
  $scope.userSelectionIndex = 0;

  $scope.inputFromBoard = function(index, boardNum) {
    if(boardNum === "_"){
      $scope.permissions = true;
      $scope.userSelectionIndex = index;
    }
  }

  $scope.inputFromNumbers = function(answer) {
    SudokuCheckAnswer(answer, $scope.userSelectionIndex, solutionArr);
    $scope.permissions = false;  
  }
}

/**
  TO DO: move these files to angular sevices
**/

function SudokuSolutionArr() {
  var thePuzzle = new Sudoku();
  thePuzzle.newGame();
  thePuzzle.solveGame();
  return thePuzzle.matrix;
}


function SudokuGridIndex() {
  var gridArr = [];

  for(var i=0; i<81; i++) {
    gridArr[i] = i+1;
  }
  return gridArr;
}


function SudokuGameArr(n, gameArr) {
  var difficultyArr = SudokuGridIndex();
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
}


function SudokuCheckAnswer(n, index, solutionArr) {
  if(n === solutionArr[index]) {
    console.log("you're right smartie pants");
  } else {
    console.log("wrong awnser stupid");
  }
}





