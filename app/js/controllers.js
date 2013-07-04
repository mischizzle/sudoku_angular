'use strict';

/* Controllers */
function SudokuCtrl($scope) {

  $scope.title = "Sudoku, with AngularJS";

  $scope.difficulty = "Easy";

  //refactor: have this in a 9x9 grid, and not linear
  $scope.grid = SudokuGen();

  $scope.test = function() {
    console.log("hi!");
  }
}

function SudokuGen() {
  var thePuzzle = new Sudoku();
  thePuzzle.newGame();
  thePuzzle.solveGame();

  return thePuzzle.matrix;
}

