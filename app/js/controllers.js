'use strict';

/* Controllers */
function SudokuCtrl($scope, sudokuFactory) {

  var solutionArr = sudokuFactory.getSolutionArray();
  var indexArray = sudokuFactory.getIndexArray();
  var gameArray = sudokuFactory.getGameArray(20, indexArray, solutionArr);

  $scope.title = "Sudoku, by AngularJS";
  $scope.difficulty = "easy";
  $scope.gameGrid = gameArray;
  $scope.permissions = false;
  $scope.userSelectionIndex = 0;


  $scope.inputFromBoard = function(index, boardNum) {
    if(boardNum === "_"){
      $scope.permissions = true;
      $scope.userSelectionIndex = index;
    }
  }

  $scope.inputFromNumbers = function(answer) {
    var answer = sudokuFactory.verifyAnswer(answer, $scope.userSelectionIndex, gameArray, solutionArr);
    if(answer) {
      $scope.permissions = false;  
    }
  }
}







