// call apply bind

var obj = {num:2};
var addToThis = function(a,b,c) {
    return this.num+a+b+c;
}

// using function.call
console.log(addToThis.call(obj, 1,2,3)) // returns 8
// using function.apply
console.log(addToThis.apply(obj, [1,2,3])) // returns 8
// using function.bind
var bound = addToThis.bind(obj);
console.log(bound(1,2,3));


// 4
let Student = {age:20};
function printAge() {
 console.log(this.age);
}
// using function.bind
let printStudentAge = printAge.bind(Student);
printStudentAge();




// function currying

// preseting an argument of a function is called as currying


// by using function.bind
let multiply = function(x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); // 6
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // 15

// by using clousers
let Cmultiply = function(x) {
    return function(y) {
        console.log(x*y);
    }
}
let multiplyBy2 = Cmultiply(2); // this sets x as 2
multiplyBy2(5); // 10

let multiplyBy3 = Cmultiply(3); // this sets x as 3
multiplyBy3(5); // 15
