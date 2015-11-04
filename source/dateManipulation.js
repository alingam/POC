/**
 * Created by appusubbu on 11/3/15.
 */

//function to change the date format "YYYY-MM-DD" to "MM/DD/YYYY"
function dateChange(dateStr){
    var dateArr=[];
    var d = new Date(dateStr);
    dateArr.push(d.getMonth());
    dateArr.push(d.getDate());
    dateArr.push(d.getFullYear());
    return dateArr.join('/');
}


console.log(dateChange("2010-8-10"));