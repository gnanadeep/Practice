
// 1)
var emp = {name: "Ramesh", address: {city: "Hyd", state: "Tn", country: "india"} };
var emp2 = {name: "Ramesh", address: {state: "Tn", country: "india"} };
var emp3 = {name: "Ramesh"};
var emp4;

// Write a function  to take emp as parameter and print the city if
//  exists else print as "employee city is not available."
function cityCheck(emp){
    if(emp && emp.address && emp.address.city){
    return emp.address.city;
    }else{
    return "employee city is not available.";
    }
    
    }
// 2) List out truthy / falsy values  from following
 var a;
 console.log(!a); // true
 console.log(!!a); // false
 
 console.log(!7); // false
 console.log(!!7); // true

 console.log(!0); // true
 console.log(!!0); // false

 console.log(!7); // false

console.log(7=="7"); // true
console.log(7==="7"); // false

// 3) 
var emp = {};

console.log(!emp); // false
console.log(!!emp); // true

console.log(!emp.name); // true