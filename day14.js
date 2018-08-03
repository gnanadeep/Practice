// Day 14:
// /************* Use only let and const  to write below programmes *********/
// 1) Write two functions to calculate the area and perimeter of a circle takes the radius 
// as parameter.
let area = r => Math.PI * r * r;
console.log(area(2));

// 2) Write a function to create a copy of an object by iterating over the keys of an it.

const obj = {
    name: "dev",
    age: 21,
    school: "king"
}


console.log(obj);
// 3) Write a function to print the output as follows for the given no of rows with a given 
// character.(given rows count is 6 and character is *){ two params (count, character)}

var outStars = (count, character) => {

    let str = '';
    for (var i = 1; i <= count; i++) {
        for (var j = 0; j < i; j++) {
            str += character;

        }
        console.log(str);
    }

}

console.log(outStars(4, '*'))

// *
// **
// ***
// ****
// *****
// ******
// 4) Write a function to create a copy of an existing array (pass as parameter) and return the new copy of the array (if provided takes second and third paramters from position and to position).

//  Write the above programme in all possible ways.

// 5) Write a function which maintains an array and the function returns an object in which
//  we will be having four functions one for each operation
// push ,pop, shift , unshift and a function to view the array elements.