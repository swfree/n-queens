/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, start) {
  var solution = []; 
  var curRow = [];
  var start = start || 0; 

  var board = new Board({n: n});
  
  for (var rowIndex = 0; rowIndex < n; rowIndex++) {
    var curRow = [];
    for (var colIndex = 0; colIndex < n; colIndex++) {
      if (rowIndex === 0 && colIndex === start) {
        curRow[colIndex] = 1;
        board.set(rowIndex, curRow);
      } else {
        curRow[colIndex] = 1;
        board.set(rowIndex, curRow);
        if (board.hasAnyRooksConflicts()) {
          curRow[colIndex] = 0;
          board.set(rowIndex, curRow);
        } 
      }
    }
    // EDGE CASE: what happens if curRow only has 0 values? 
  }

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solutions = [];

  for (var i = 0; i < n; i++) {
    solutions.push(window.findNRooksSolution(n, i));
  }

  // we'll call findNRooksSolution n times
    // passing in a new column index each time
    // count every time we get a truthy return value

  solutionCount = solutions.length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
