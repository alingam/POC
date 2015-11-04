/**
 * Created by appusubbu on 11/2/15.
 */

//Check the number available or not in an NxN dimensional array

function traverseMatrix(matrix,number){
    //N x N matrix sorted matrix
    var n=matrix.length;
    var i=0; var j=n-1;
    var exists=false;
    while(i<n && j>=0){
        console.log("element: "+matrix[i][j]);
        if(matrix[i][j]==number){
            exists=true;
            return exists;
        }
        if ( matrix[i][j] > number )//if the number is less than value- go towards left
        {
            j--;
        }
        else{
            i++;// go towards
        }

    }
    return exists;
}

var data=[
    [1, 2, 3],
    [3, 4, 6],
    [4, 6, 7]];

console.log(traverseMatrix(data,4));
