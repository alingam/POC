/**
 * Created by appusubbu on 11/2/15.
 */
function factorial(number) {
    if (number == 0) {
        return 1;
    }
    if(number>0){
        return (number*factorial(number-1))
    }

}

console.log(factorial(5));