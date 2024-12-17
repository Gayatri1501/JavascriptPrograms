// // Object Literal
// let a = "ZZYYss";
// console.log(a);

// // Using new keyword
// let value = new Object();
// value.v1 = 123;
// value.v2 = "MyObject";
// document.write(value.v2);

// // Using Constructor Function
// function Value1(age, id) {
//     this.age = age;
//     this.id = id;
//     this.fun = function () {
//         return this.age + " " + this.id;
//     };
// }

// // Creating an object using the constructor
// let person = new Value1(35, 111);
// console.log(person.fun());

// // Objects Methods
// let val = {
//     firstname: "abc",
//     lastname: "vvv",
//     id: 101,
//     re: function () {
//         return this.firstname + " " + lastname;
//     }
// }
// console.log(val.re());
// // Display Objects

// creating objects using literal way
// const val = {
//     name: "Abcd",
//     val: 123,
//     greet: function () {
//         console.log("using literal way :" + this.name);
//     }
// };

const av = {
    add: Atomics,
    pin: 2222,
    city: ngp,
};
document.getElementById("demo").innerHTML = av.add + "" + av.pin;