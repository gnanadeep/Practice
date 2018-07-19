 // 1) Create a closure function as a class to create employee object .(properties and all functions should be private).
 // write method in the above function which can access to outer world as it can access the all private members of the 
 var Emp = (function() {
  var name = "king"
  var age = 25
    function Emp() {
        this.getName = function() {
            return name;
        };
      this.getAge = function(){
        return age;
      }
    }

    return Emp;
}());
var e = new Emp();
console.log(e.getName());
console.log(e.getAge());



var emp = new Employee();
console.log(emp.displayName()); // age
console.log(emp.displayAge()); // 25

// Write a closure which has a private variable initialised to 0.
//  Return an object which contains four methods each takes a paramter and perform a 
// mathematical operation with avilable private varible and return the result.
//  Also provide a method to get &  update private variable value.
var counter = (function() {
    var count = 0;
   getValue = function() {
          return count;
      };
  
      setValue = function(value) {
          count = value;
      };
   
    return {
      add: function(num) {
        count += num;
      },
      sub: function(num) {
       count -= num;
      },
      mul: function(num) {
       count *= num;
      },
      divide : function(num) {
       count /= num;
      },
     
      value: function() {
        return count;
      }
    };   
  })();
  console.log(counter.value());//logs 0
  setValue(4);
  getValue(); // logs 4
  console.log(counter.value()); // logs 4
  counter.add(1);
  counter.add(5);
  console.log(counter.value()); // logs 10
  counter.sub(1);
  console.log(counter.value()); // logs 9
  counter.mul(5);
  console.log(counter.value()); // logs 45
  counter.divide(2);
  console.log(counter.value()); // 22.5
