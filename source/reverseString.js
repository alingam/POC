/**
 * Created by appusubbu on 11/3/15.
 */
function reverseString(str){
    return str.split(' ').reverse().join(' ');
}
function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseString('I am the good boy'));
console.log(reverseInPlace('I am the good boy'));