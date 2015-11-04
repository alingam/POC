/**
 * Created by appusubbu on 11/2/15.
 */
function greatCommonDivisor(a,b){
    var divisor=2;
    var gcd=1;
    if(a<2 || b<2){
        return 1;
    }
    while(a>=divisor && b>=divisor){
        if(a%divisor==0 && b%divisor==0){
            gcd=divisor;
        }
        divisor++;
    }
    return gcd;
}


function greatestCommonDivisor(a, b){
    if(b == 0)
        return a;
    else
        return greatestCommonDivisor(b, a%b);
}

console.log(greatCommonDivisor(25,30));
console.log(greatestCommonDivisor(25,30));