'use strict';

/* Controllers */
myAwesomeApp.controller('SudokuCtrl', 
  function SudokuCtrl($scope, SudokuGame) {

    $scope.title = "Sudoku, by AngularJS";
    $scope.level = "easy";

    $scope.permissions = false;
    $scope.userSelectionIndex = 0;

    $scope.gameObj = SudokuGame.newGame($scope.level);

    $scope.percentageRemaining = SudokuGame.getAnsweredPercentage($scope.gameObj);


    $scope.changeLevel = function(level) {
      console.log("change level to: " + level);
      $scope.gameObj = SudokuGame.newGame(level);
      return level;
    }

    $scope.inputFromBoard = function(index, boardNum) {

      if(boardNum === "_"){
        $scope.permissions = true;
        $scope.userSelectionIndex = index;
      }
    }

    $scope.inputFromNumbers = function(answer) {
      var answer = SudokuGame.verifyAnswer(answer, $scope.userSelectionIndex, $scope.gameObj);
      if(answer) {
        $scope.permissions = false;  
      }
    }
  }
);







