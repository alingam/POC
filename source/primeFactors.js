/**
 * Created by appusubbu on 11/2/15.
 */
function primeFactors(number){
    var divisor=2;
    var factors=[];
    while(number>=2){
        if(number%divisor==0){
            factors.push(divisor);
            number=number/divisor;
        }else{
            divisor++;
        }

    }
   return factors;
}

console.log(primeFactors(30));