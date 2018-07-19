// 1) Write a programe to find the given number if prime or not.

function prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
// 2 Write a programe to find sum of n natural numbers.
function sumnaturalno(n)
    {
        var i;
        var sum = 0;
        for(i = 1;i <= n; i++){
            sum = sum + i;}
        return (sum);
    }
// 3) Write a programe to print febonacci series up to a sepecified no of elemnets.
// 4) Write a programe to find sum of squares of first n natural numbers.
// 5) Find the largest/smallest/average number in the given array. (array as parameter)
// small
function min(arr){
	var min = arr[0]
	for(i=0;i<arr.length;i++){
	if(arr[i]< min){
		min = arr[i]
	}
 }
	return min;
}
// large
function max(arr){
	var max = arr[0];
	var i = arr.length;
	while(i>0){
		if(arr[i]>max){
			max = arr[i];
			}
		i--;
	}
	return max;
}
// avg
function getAvg(arr) {
 var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
return avg;
}
// 6) Return a string whose length maximum in the list of array of strings.

// 7) Write a programe to reverse the elements in the array.