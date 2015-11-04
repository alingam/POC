/**
 * Created by appusubbu on 11/2/15.
 */
function fibonacci(number){
    var f=[0,1];
    if(number<=1){
        return 1;
    }
    for(var i=2;i<=number;i++){
        f[i]=f[i-1]+f[i-2];
    }
    return f;
}

function getFibonacci(number){
    if(number<=1) return number;
    else return (getFibonacci(number-1)+getFibonacci(number-2))
}

console.log(fibonacci(12));
console.log(getFibonacci(12));