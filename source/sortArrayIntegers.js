/**
 * Created by appusubbu on 11/3/15.
 */
function sortArrayIntegers(arr){
    var sorted=arr.sort(function(a,b){
        if(a<b)return -1;
        if(a>b)return 1;
        if (a==b)return 0;
    });
    console.log(sorted)
}

sortArrayIntegers([7,11,14,88,1]);