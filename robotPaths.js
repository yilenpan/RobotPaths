var slowCountPaths = function(grid, row, col){
  /**
   * Bruteforced solution
   * ===========
   *
   * We pass in rows and cols as our position
   * We set the base case - If we hit the last square return 1
   * We then check to see if we can move down,
   * If we can, then we call countPaths again, but we set the row + 1
   * Then we check to see if we can move right,
   * If we can, then we call countPaths again, but we set the col to + 1
   *
   */
   row = row || 0;
   col = col || 0;
   var count = 0;

   if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
   } else {
    // Can we move to the down?
    if (row + 1 < grid.length) {
      count += countPaths(grid, row + 1, col);
    }
    // Can we move right?
    if (col + 1 < grid[0].length) {
      count += countPaths(grid, row, col + 1);
    }
   }
   return count;

};

/**
 * Fast solution
 * ===========
 *
 * We can add how many moves it takes to the square above
 * to how many moves it takes to move to the square to the left
 * Knowing this, we can build the grid by adding how many moves it would
 * take to get to the above/left square
 *
 *
 * [[1,1,1,1],
 *  [1,2,3,4],
 *  [1,3,6,10],
 *  [1,4,10,20]]
 *
 * Then we just take the last square
 *
 */

var countPaths = function(grid){

  grid[0][0] = 1;
  for(var row = 0; row < grid.length; row++){
    for(var column = 0; column < grid[0].length; column++){
      if(grid[row][column] !== undefined) continue;
      var above = row > 0 ? grid[row - 1][column] : 0;
      var left = column > 0 ? grid[row][column - 1] : 0;
      grid[row][column] = above + left;
    }
  }
  return grid[row - 1][column - 1];
}










