'use strict';

/* Controllers */
function SudokuCtrl($scope) {

  $scope.title = "Sudoku, with AngularJS";

  $scope.sudoku = [
    {"name" : "game1"}
    //{"grid" : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]}
  ];
  //$scope.sudoku.grid = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
}