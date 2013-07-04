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

    it('should have the title "sudoku"', function() {
      expect(scope.title).toEqual("Sudoku, with AngularJS");
    });

    it('should set the difficulty of the game', function() {
      expect(scope.difficulty).toEqual("Easy");
    });

    it('should have a grid of 81 items', function() {
      expect(scope.grid.length).toEqual(81);
    });
  });

  describe('SudokuGen', function() {

    it('should return an array of 81 elements', function() {

      var ctrl = new SudokuGen();

      expect(ctrl.length).toBe(81);

    });
  });
});
