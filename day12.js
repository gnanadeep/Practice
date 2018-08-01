// 1) Create a   counter function using closure concept.

function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();

// 2) Create a function with private properties such productId , name, price, 
//    return an object contains methods to access the properties in the above function.


// 3) create an object having 2  properties, one contains array of numbers. the other 
//  is a method is used to calculate the sum of the array elements in the above mentioned property.
var obj = {
    arr: [1, 2, 3, 4],
    sum: function () {
        return this.arr.reduce((acc, cur) => acc + cur);
    }
}
// 4) Create a new  student object which has properties such as name, rollno, marks in one property.
var student = {
    name: 'k',
    rollno: 7,
    marks: [1, 2, 3, 4, 5]
}
// 5) Caclaute the sum of marks by using call and apply methods.

obj.sum.call(student.marks)
// 6) Try to create a counter using IIFE.