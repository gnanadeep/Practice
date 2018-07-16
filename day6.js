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