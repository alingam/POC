/**
 * Created by appusubbu on 11/2/15.
 */

function isPrimeNumber(number){
   var maxDivisor=Math.round(Math.sqrt(number));
    console.log(maxDivisor);
    var divisor=2;
    var isPrime=true;
    while(divisor<=maxDivisor){
        console.log(divisor);
        if(number%divisor==0){
            isPrime=false;
            return isPrime;
        }else{
            divisor++
        }
    }
    return isPrime;
}

console.log(isPrimeNumber(73));