'use strict';

/* jasmine specs for controllers go here */

describe('Sudoku controllers', function(){

  describe('SudokuCtrl', function() {

    var scope;
    var ctrl;

    beforeEach(function() {
      scope = {};
      ctrl = new SudokuCtrl(scope);
    });

    it('should have the correct title', function() {
      expect(scope.title).toEqual("Sudoku, by AngularJS");
    });

    it('should set the difficulty of the game', function() {
      expect(scope.difficulty).toEqual("easy");
    });

    it('should have a game grid of 81 items', function() {
      expect(scope.gameGrid.length).toEqual(81);
    });

    xit('should test user input from the board');

    xit('should test user input from the number options');

  });

  //TO DO: refactor this to go into services; not part of the controller
  describe('SudokuSolutionArr', function() {

    xit('should return an array of 81 elements', function() {

      var ctrl = new SudokuSolutionArr();

      expect(ctrl.length).toBe(81);

    });
  });
});
