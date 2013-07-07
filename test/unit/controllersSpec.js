'use strict';

/* jasmine specs for controllers go here */

describe('Sudoku controllers', function(){

  describe('SudokuCtrl', function() {

    var scope,
        sudokuFactory,
        ctrl,
        gameArrayStub = [4, 9, 7, 3, 6, 2, 5, 1, 8, 3, 6, 8, 9, "_", 1, "_", 7, 4, 1, 2, 5, 4, 8, "_", "_", "_", "_", "_", 7, 4, "_", 1, 9, 8, "_", 3, "_", 8, "_", 7, 4, 6, 1, 2, 9, 6, 1, 9, 2, 3, 8, 4, "_", 7, 7, 3, "_", 8, 9, 5, 6, 4, 2, 9, 4, 6, 1, 2, 3, 7, "_", 5, 8, 5, "_", 6, 7, 4, "_", 3, 1],
        solutionArrayStub = [4, 2, 9, 3, 1, 5, 7, 8, 6, 1, 3, 8, 9, 6, 7, 5, 2, 4, 6, 5, 7, 8, 2, 4, 1, 3, 9, 3, 4, 5, 7, 9, 6, 2, 1, 8, 8, 7, 1, 5, 4, 2, 6, 9, 3, 2, 9, 6, 1, 8, 3, 4, 5, 7, 5, 6, 3, 2, 7, 8, 9, 4, 1, 7, 1, 2, 4, 3, 9, 8, 6, 5, 9, 8, 4, 6, 5, 1, 3, 7, 2],
        indexArrayStub = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81];


    beforeEach(function() {
      scope = {};
      sudokuFactory = {
        getSolutionArray : function() { return solutionArrayStub },
        getGameArray : function() { return gameArrayStub },
        getIndexArray : function() { return indexArrayStub },
        verifyAnswer : function() { return true }
      };
      ctrl = new SudokuCtrl(scope, sudokuFactory);
    });


    beforeEach(module('sudoku'));

    it('should have the correct title', function() {
      expect(scope.title).toEqual("Sudoku, by AngularJS");
    });


    it('should set the difficulty of the game', function() {
      expect(scope.difficulty).toEqual("easy");
    });

    it('should have a game grid of 81 items', function() {
      expect(scope.gameGrid.length).toEqual(81);
    });
  });
});
