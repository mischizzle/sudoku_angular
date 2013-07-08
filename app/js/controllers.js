'use strict';

/* Controllers */
function SudokuCtrl($scope, sudokuFactory) {

  $scope.title = "Sudoku, by AngularJS";
  $scope.level = "easy";

  $scope.permissions = false;
  $scope.userSelectionIndex = 0;

  $scope.gameObj = sudokuFactory.newGame($scope.level);


  $scope.changeLevel = function(level) {
    $scope.gameObj = sudokuFactory.newGame(level);
  }


  $scope.inputFromBoard = function(index, boardNum) {
    if(boardNum === "_"){
      $scope.permissions = true;
      $scope.userSelectionIndex = index;
    }
  }

  $scope.inputFromNumbers = function(answer) {
    var answer = sudokuFactory.verifyAnswer(answer, $scope.userSelectionIndex, $scope.gameObj);
    if(answer) {
      $scope.permissions = false;  
    }
  }
}







