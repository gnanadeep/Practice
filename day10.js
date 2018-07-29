// 1) List out numbers from 1 to 10 , with a time between two prints is 3 seconds.
var a = 0;
function increment(){

if(a < 10){
console.log(a);
}
a++
}

setInterval(increment,3000)

// 2) log time for every 5 seconds. (use  new Date() ) untill you stop explictly.
setInterval(function() {
    console.log(new Date());
}, 5000);
// 3) Write 3 different  programes to print the greetings as 
// "Good Morining",
// "Good Afternoon", 
// "Good evening"
//  (Time gap between two greeting should be 5 seconds). in atleast in 3 diffrent orders.)

// Take differnt times each message using differnt timeout function to acheive this.

function morning(){
  console.log("Good Morning");
}
function afternoon(){
  console.log("Good Afternoon");
}
function night(){
  console.log("Good Night");
}

function display(){
setTimeout(morning,3000);
setTimeout(afternoon,5000);
setTimeout(night,1000);
}

  
  
// 4) Write a function to print array elemnets with a time gap of 3 seconds 
//   => Write this programe using setInterval {you can use global variables for varible declarations}
//   => write this programe using setTimeout.

// using setInterval
var arr = [1,2,3,4]
var a = 0;
function increment(){
    if(a < arr.length){
      console.log(arr[a]);
    }
  a++;
}
setInterval(increment,1000);

// using setTimeout
var arr = [1,2,3,4]
var a = 0;

(function loop() {
  
    if (a < arr.length) {
        setTimeout(loop, 3000);
      console.log(arr[a]);
      a++;
    }
})();

// 5) Write a programe to create a class for Book having properties as id, name, author, price, genre
//     along with methods to get and set those properties.
//     create an object using the above class and setting the properties of object using constructor.
function Book(id,name,author,price,genre){
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.genre = genre;
    this.getId = function(){return id;}
    this.getName = function(){return name;}
    this.getAuthor = function(){return author;}
    this.getPrice = function(){return price;}
    this.getGenre = function(){return genre;}
    this.setId = function(setid){ id = setid;}
    this.setName = function(setname){ name = setname;}
    this.setAuthor = function(setauthor){ author = setauthor;}
    this.setPrice = function(setprice){ price = setprice;}
    this.setGenre = function(setgenre){ genre = setgenre;}
    }
// 6) Create some number of objects using the above class.
//     Write a function to know the no of objects created using the above class.
var book= new Book(1,'english','author1',10,'study')
var book1 = new Book(2,'spanish','author2',20,'read')
var book2 = new Book(3,'french','author3',30,'learn')
// 7) Put the created books objects into an array.
//     Write a single function which takes a paramter which is attribute key {example "name" / "author"] to
//  list out the that property value of all objects in the array. 
var arr = [book,book1,book2]
function values(key){
for(var i=0; i<arr.length;i++){
  console.log(arr[i][key]);
}
}
values("id")
values("name")
values("author")
values("price")
values("genre")
// Exampel: 
// 1) listout("names");
// log all books names.
// 2) listout("price");
// log all books prices.

// 8) Sort the books in the array by using its prices. (ascending)
var sorted = arr.sort(function(a, b){
    return a.price > b.price;
  });
  console.log(sorted)
// 9) Sort the books using prices , if prices are same then use name.

var sortedName = arr.sort(function(a, b){
    if(a.price != b.price){
        return a.price > b.price;
    }else{
        return a.name > b.name;
    }
    
  });
  console.log(sortedName)
// 10) Write a function to remove duplicate books in the array , if id is same for two books, then you can remove one of them.



// function removeDuplicates(arr) {
//     return arr.filter(function(a,i){return indexOf(a.id) == i; });
// }
// console.log(arr);// not running