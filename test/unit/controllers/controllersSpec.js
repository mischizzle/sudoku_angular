'use strict';

/* jasmine specs for controllers go here */

describe('SudokuCtrl', function() {

  var ctrl;
  var scope;
  var mockGameData;
  var gameObjMock  = {
    gameMatrix : [2, "_", 1, 8, 4, "_", 3, 5, 7, 3, 8, 9, 7, 5, "_", 6, "_", 4, 4, "_", 7, 1, 3, 6, 8, 9, "_", "_", "_", 2, 4, 9, 5, 1, "_", 8, 5, "_", 3, 6, "_", 8, 7, 4, 9, 8, 9, "_", 3, 7, 1, 2, 6, "_", "_", "_", 8, 2, 6, 3, 5, 7, "_", 1, 3, 5, "_", 8, 7, 4, 2, 6, 7, "_", 6, 5, 1, "_", 9, 8, "_"],
    solutionMatrix : [2, 6, 1, 8, 4, 9, 3, 5, 7, 3, 8, 9, 7, 5, 2, 6, 1, 4, 4, 5, 7, 1, 3, 6, 8, 9, 2, 6, 7, 2, 4, 9, 5, 1, 3, 8, 5, 1, 3, 6, 2, 8, 7, 4, 9, 8, 9, 4, 3, 7, 1, 2, 6, 5, 9, 4, 8, 2, 6, 3, 5, 7, 1, 1, 3, 5, 9, 8, 7, 4, 2, 6, 7, 2, 6, 5, 1, 4, 9, 8, 3]
  }
  var SudokuGameMock = {
      newGame : function() { return gameObjMock; },
      verifyAnswer : function() { return true; },
      getPendingAnswers : function() { return 10; },
      getAnsweredPercentage : function() { return "50%" }
    };

  beforeEach(module('myAwesomeApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller("SudokuCtrl", { $scope:scope, SudokuGame:SudokuGameMock });
  }));

  
  
  it('should have the correct title', function() {
    expect(scope.title).toEqual("Sudoku, by AngularJS");
  });

  it('should have the default level set to easy', function() {
    expect(scope.level).toEqual("easy");
  });

  //Pending...
  xit('should display the percentage completed', function() {
      //expect(scope.remaining()).toEqual(10);
    });

  it('should start the game', function() {
    expect(scope.gameObj).toEqual(gameObjMock);
  });

  it('should update the game board if user selects different difficult level', function() {
    expect(scope.changeLevel("medium")).toEqual("medium");
  });

  it('should have a game grid of 81 items', function() {
    expect(scope.gameObj.gameMatrix.length).toEqual(81);
  });
}); 
