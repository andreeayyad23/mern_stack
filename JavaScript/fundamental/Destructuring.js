//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//first one will print Tesla, second one will prent Mercedes "cause it have (,)"
console.log(randomCar)
console.log(otherRandomCar)


//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// here will give name not defined cause the name changed to otherName,
// now if we stop printing name will print "elon".
// console.log(name);
console.log(otherName);

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//first one will display 12345, second one undefined cause: its not undefined anywhere
console.log(password);
console.log(hashedPassword);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
////first one will display False is not equal, second one will display true cause second one equal last one
console.log(first == second);
console.log(first == third);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//1. will display 'value',/// 2. [1, 5, 1, 8, 3, 3],/// 3. 1,/// 4. 5 cause it have ",".
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

