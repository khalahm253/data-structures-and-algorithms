
'use strict';

var my2DArray = [[1, 2, 3],[4, 5, 6],[7, 8, 1]];

function largestProduct() {

  var highestAdjNums = 0;

  for (var i = 0; i < my2DArray.length; i++) {
    if (typeof my2DArray[i-1] !== 'undefined') {

      for (var j = 0; j < my2DArray[i].length; j++) {
        var currentNum = my2DArray[i][j];
    
        var topLeft = my2DArray[i-1][j-1] * currentNum;
        if (topLeft > highestAdjNums) {
          highestAdjNums = topLeft;
        }

        var topMid = my2DArray[i-1][j] * currentNum;
        if (topMid > highestAdjNums) {
          highestAdjNums = topMid;
        }

        var topRight = my2DArray[i-1][j+1] * currentNum;
        if (topRight > highestAdjNums) {
          highestAdjNums = topRight;
        }

        var midLeft = my2DArray[i][j-1] * currentNum;
        if (midLeft > highestAdjNums) {
          highestAdjNums = midLeft;
        }

        var midRight = my2DArray[i][j+1] * currentNum;
        if (midRight > highestAdjNums) {
          highestAdjNums = midRight;
        }

        if (typeof my2DArray[i+1]!== 'undefined') {
          var bottomLeft = my2DArray[i+1][j-1] * currentNum;
          if (bottomLeft > highestAdjNums) {
            highestAdjNums = bottomLeft;
          }
        }

        if (typeof my2DArray[i+1]!== 'undefined'){
          var bottomMid = my2DArray[i+1][j] * currentNum;
          if (bottomMid > highestAdjNums) {
            highestAdjNums = bottomMid;
          }
        }

        if (typeof my2DArray[i+1]!== 'undefined'){
          var bottomRight = my2DArray[i+1][j+1] * currentNum;
          if (bottomRight > highestAdjNums) {
            highestAdjNums = bottomRight;
          }
        }
      }
    }
  }  
  
}


largestProduct();