// 1) Create a Student class(function) to add the instance properties such as
//  name, age, course, address:{landMark, street, city, state, country }
// Create 2 objects by using the student class (use new ) with diffirent values.
// Save them to localStorage and sessionStorage and extract them back into two different references.

function Student(name, age, course,landMark, street, city, state, country ){
    this.name =name;
    this.age = age;
    this.course = course;
    this.address = {
            landMark : landMark,
            street : street,
            city : city,
            state : state,
            country : country		
        }
    }
    var std1 = new Student('rahul',25,'js','hotel','nagar','jersey','ny','us');
    var std2 = new Student('kiran',25,'java','station','nagar','newark','de','us');

sessionStorage.setItem("std1",JSON.stringify(std1));
var student1 = sessionStorage.getItem('std1');
console.log(JSON.parse(student1));


localStorage.setItem("std2",JSON.stringify(std2));
var student2 = localStorage.getItem('std2');
console.log(JSON.parse(student2));
// 2) Create copy of one of the above object.
// 3) Try the above once using sessionStorage also.

var copy = JSON.parse(JSON.stringify(std1));