//8. write a programe to sort the array elements ascending/ descending

function ascenArray(arr){
    arr.sort((a,b) => a-b);
    }
//  descending
function ascenArray(arr){
    arr.sort((a,b) => b-a);
    }

// 9 . FInd a reverse of given string using loop. 

function reverseStr(str){
    var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
  
//10  Print the array indexes having elements.
function arrayIndex(arr){
    for(var i=0; i<arr.length; i++)
    if(arr[i] != '')
    {
    console.log(i)}
    }    

// 11) write code to find the given number is polindrome or not.
function polindrome(str){
    var re = /[\W_]/g;
   var  first = str.toLowerCase().replace(re ,'');
   
   var last = first.split('').reverse().join('');
   return last === first
   }
// 12) write code to find the given number is Armstrong number or not.
function armstrongNum(number){
    var number = number.toString();
    var numberOfDigits = number.length;
    var sum = 0;
    
    for (i = 0; i < numberOfDigits; i++) {
      sum += Math.pow(number.charAt(i), numberOfDigits);
    }
     
    return sum == number 
    }
// 13) List out all duplicate elements in an array
function listDUp(arr){
    debugger;
    for(var i = 0; i < arr.length; i++)
    if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])){
    console.log (arr[i]);
    }
    }
// 14)  Remove duplicates in array.
function removeDup(arr){
    return arr.filter((a,i) => arr.indexOf(a) == i )
    }
// 15) Create a duplicate array with elements between the given two indexs..
function dupelements(arr,a,b){
	var dup = []; 
  for(var i=a+1;i<b;i++){
	dup.push(arr[i]);
}
return dup;}
// 16) Implement splice and slice functions with different names as spliceNew , sliceNew
