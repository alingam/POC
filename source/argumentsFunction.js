/**
 * Created by appusubbu on 11/3/15.
 */

function argumentsFunction() {
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(argumentsFunction(1, 2, 3));

function sumNumbers(){
    var x=arguments[0];
    if(arguments.length>1){
        return arguments[0]+arguments[1];
    }else{
        return function(y){
            return x+y;
        }
    }
}

console.log("printing closure sum: "+sumNumbers(6)(3));
console.log("printing arguments sum: "+sumNumbers(6,3));

