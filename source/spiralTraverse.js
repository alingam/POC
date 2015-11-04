/**
 * Created by appusubbu on 11/3/15.
 */

//Spiral traversal of an MxN dimensional array

function spiralTraverse(matrix){
    var top= 0,bottom=matrix.length-1;
    var left= 0,right=matrix[0].length-1;
    var output=[];
    var spiral=true;
    while (spiral) {
        for (var i = left; i <= right; i++) {
            output.push(matrix[top][i])
        }
        top++;
        if (top > bottom || left > right) {
            spiral=false;
        }
        for (var j = top; j <= bottom; j++) {
            output.push(matrix[j][right])
        }
        right--;
        if (top > bottom || left > right) {
            spiral=false;
        }
        for (var k = right; k >= left; k--) {
            output.push(matrix[bottom][k])
        }
        bottom--;
        if (top > bottom || left > right) {
            spiral=false;
        }
        for (var n = bottom; n >= top; n--) {
            output.push(matrix[n][left])
        }
        left++;
        if (top > bottom || left > right) {
            spiral=false;
        }
    }
    return output;
}

var matrix=[
    [1, 2, 3, 4],
    [2, 3, 6, 8],
    [3, 4, 8, 6],
    [4, 6, 7, 9]];

console.log(spiralTraverse(matrix));