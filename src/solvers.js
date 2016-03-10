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



window.findNRooksSolution = function(n, check) {
  var board = new Board({n: n});
  var counter = 0;

  var findAllSolutions = function (board, rowIndex) {
    for (var colIndex = 0; colIndex < n; colIndex++) {
      board.togglePiece(rowIndex, colIndex);

      if (!board.hasAnyRooksConflicts()) {
        // base case
        if (rowIndex === (n - 1)) {
          if (check) {
            counter++;
            board.togglePiece(rowIndex, colIndex);
          } else {
            return board; // for finding a single solution
          }
        } else {
          var nextRow = rowIndex + 1;
          var result = findAllSolutions(board, nextRow);
          if (result) {
            return result;
          } else {
            board.togglePiece(rowIndex, colIndex);
          }
        }
      // if there are conflicts:  
      } else {
        board.togglePiece(rowIndex, colIndex);
      }
    }

    return undefined;
  };

  var solution = findAllSolutions(board, 0);
  if (check) {
    return counter;
  } else {
    return solution.rows();
  }

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = findNRooksSolution(n, true);

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, check) {
  var board = new Board({n: n});
  var counter = 0;
  // debugger;

  if (check) {
    // return just the count for 0, 2, 3
    if (n === 0) {
      return 1;
    } else if (n === 2 || n === 3) {
      return 0;
    }
  } else {
    // return the empty solution board
    if (n === 0) {
      return [];
    } else if (n === 2 || n === 3) {
      return board.rows();
    }
  }
  // for single solution:

  // for check true:


  var findAllSolutions = function (board, rowIndex) {
    for (var colIndex = 0; colIndex < n; colIndex++) {
      board.togglePiece(rowIndex, colIndex);

      if (!board.hasAnyQueensConflicts()) {
        // base case
        if (rowIndex === (n - 1)) {
          if (check) {
            counter++;
            board.togglePiece(rowIndex, colIndex);
          } else {
            return board; // for finding a single solution
          }
        } else {
          var nextRow = rowIndex + 1;
          var result = findAllSolutions(board, nextRow);
          if (result) {
            return result;
          } else {
            board.togglePiece(rowIndex, colIndex);
          }
        }
      // if there are conflicts:  
      } else {
        board.togglePiece(rowIndex, colIndex);
      }
    }

    return undefined;
  };

  var solution = findAllSolutions(board, 0);
  if (check) {
    return counter;
  } else {
    // debugger;
    return solution.rows();
  }

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = findNQueensSolution(n, true);

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
