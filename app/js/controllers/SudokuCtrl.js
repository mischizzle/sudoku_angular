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
      confirm("This will start a new game");
      $scope.gameObj = SudokuGame.newGame(level);
      return level;
    }

    $scope.inputFromBoard = function(index, boardNum) {

      if(boardNum === "_"){
        $scope.permissions = true;
        $scope.userSelectionIndex = index;
      }
    }

    $scope.inputAnswerCell = function(answer) {
      var answer = SudokuGame.verifyAnswer(answer, $scope.userSelectionIndex, $scope.gameObj);
      if(answer) {
        $scope.permissions = false;  
      }
    }

    $scope.inputHint = function(number) { 
      return number;
    }
  }
);







