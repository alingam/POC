/**
 * Created by appusubbu on 11/2/15.
 */
function mergeSortedArrays(a,b){
    var aElement=a[0];
    var bElement=b[0];
    var output=[];
    var i= 1;var j=1;
    if(a.length==0) return b;
    if(b.length==0) return a;
    while(aElement || bElement){
        if((aElement && !bElement) ||(aElement<bElement)){
            output.push(aElement);
            aElement=a[i++]
        }else{
            output.push(bElement);
            bElement=b[j++];
        }
    }
    return output;

}
var a=[2,4,7,8];
var b=[1,3,5];
console.log(mergeSortedArrays(a,b));