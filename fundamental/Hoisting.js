// Example 1:
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;          // Declaration
// console.log(example); // logs undefined
// example = "I'm the example!";
// ==============================================================
// Example 2:
// console.log(example);
// let example = "I'm the example!";    
// AFTER HOISTING BY THE INTERPRETER
// console.log(example);              // logs refrence error (Undeclared variable)
// let example = "I'm the example!"; // Declaring and Initialization 
// ==============================================================
// Example 3:
// console.log(hello);                                   
// var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
// var hello;          // Declaration
// console.log(hello); // logs undefined
// hello = 'world';    // Initialization
// ==============================================================
// Example 4:
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
// var needle;                // Declaration
// function test(){           // Hoisting the function
//     var needle = 'magnet'; // Ceate local variablr
//     console.log(needle);   // logs magnet
// }
// needle = 'haystack';     // Initialization
// test();                  // Call the function
// ==============================================================
// Example 5:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); 
// }
// console.log(brendan); // logs super cool (we don't call the print function)
// ==============================================================
// Example 6:
// var food = 'chicken';
// console.log(food); // logs chicken
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food); // logs half-chicken
//     var food = 'gone';
// }
// ==============================================================
// Example 7:
// mean();  // logs mean is not a function error
// console.log(food); 
// var mean = function() {
//     food = "chicken";
//     console.log(food); 
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// ==============================================================
// Example 8:
// console.log(genre); // logs Undefined
// var genre = "disco"; 
// rewind(); 
// function rewind() {
//     genre = "rock";
//     console.log(genre); // logs rock
//     var genre = "r&b";
//     console.log(genre); // logs r&b
// }
// console.log(genre);     // logs disco
// ==============================================================
// Example 9:
// dojo = "san jose";
// console.log(dojo); // logs san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); // logs seattle
//     var dojo = "burbank";
//     console.log(dojo); // logs burbank
// }
// console.log(dojo);     // logs san jose
// ==============================================================
// Example 10:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // logs TypeError: Assignment to constant variable.
    }
    return dojo;
}