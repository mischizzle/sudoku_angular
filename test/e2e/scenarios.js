'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  //TO DO: end to end tests
  describe('User input from game board', function() {

    xit('should test user selected an available box');

  });

  describe('User input from number selection', function() {

    xit('should update the board if user selected the correct number');

    xit('should display error message if user selected incorrect number');

  });
});
