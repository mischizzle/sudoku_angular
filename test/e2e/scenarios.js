'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Sudoku end to end testing', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  describe('User input for game difficult level', function() {

     it('should set the difficulty of the game', function() {
      expect(binding('level')).toEqual('easy');

      input('level').select('medium');
      expect (binding('level')).toEqual('medium');

     });

  });

  describe('User input from number game grid', function() {

    xit('should update the board if user selected the correct number');

    xit('should display error message if user selected incorrect number');

  });


  describe('User input from answer number options', function() {

    xit('should update the board if user selected the correct number');

    xit('should display error message if user selected incorrect number');

  });

});
