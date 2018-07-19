// 1) Write a function to find a given number as parameter is even / 
// odd => return "even" => return "odd"
function isOdd (num){
    if(num%2 == 1){
      return true;
     }else{
      return false;
     }
    }

// 2) Find out sum/sub/mul/div  of 3 varibles passed as parameters to a function.
// {one function for each operat/ion}
function sub(a,b,c){return a-b-c;}
function add(a,b,c){return a+b+c;}
function mul(a,b,c){return a*b*c;}
function div(a,b,c){return a/b/c;}

// 3) write a function to return "Good Morning" if given parameter is 1.
//   to return "Good Afternoon" if given parameter is 2.
// "Good night" if given parameter is 3.
// "Good day" if the parameter is is not one of them above once.

function greeting(par){
    switch (par) {
      case 1:
       console.log("Good Morning");
        break;
      case 2:
        console.log("Good Afternoon");
        break;
      case 3:
        console.log("Good Night");
        break;
      
      default:
        console.log("Good day");
    }
    }