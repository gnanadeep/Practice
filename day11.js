 // 1) Create a closure function as a class to create employee object .(properties and all functions should be private).
 // write method in the above function which can access to outer world as it can access the all private members of the 

function Employee(){
let name = "rahul";
let age = 25;
function display(){
console.log(name,age);
}
return display();
}
