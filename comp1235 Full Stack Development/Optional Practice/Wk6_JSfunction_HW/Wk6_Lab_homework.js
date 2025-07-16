// 1. Define a function called greet that takes a name as a parameter and logs a greeting to the
// console. For example, calling greet('Alice') should log Hello, Alice! to the console.
function greeting(Name) { // use regular function
       return "Hello" + " " + Name;

}

//Define a function called sum that takes two numbers as parameters and returns their sum. For
// example, calling sum(2, 3) should return 5.
const sum = function(num1, num2) { //use anonymous function
        return num1 + num2
}
let A = sum(2,3);
console.log(A);

//Define a function called isEven that takes a number as a parameter and returns true if the
// number is even, and false if it is odd. You can use the modulo operator (%) to determine if a
// number is even or odd

const isEven = function(Number) {
        if (Number % 2 === 0)
                return true
        else
                return false
}
let C = isEven(15);
let D = isEven(200);
console.log(C);
console.log(D);

//Define a function expression called double that takes a number as a parameter and returns its
//double value. For example, calling double(3) should return 6

const double = function(anyNum){
        return anyNum * 2;
}
let E = double(3)
console.log(E);

//Define an arrow function called triple that takes a number as a parameter and returns its triple
//value. For example, calling triple(3) should return 9.
const triple = (InputNum) => {
        return InputNum * 3;
}
let F = triple(3)
console.log(F);

//Test your functions by calling them with different values and verifying that they return the
//expected output. You can log the output to the console or display it in the HTML of the page
//Test Test
window.onload=function(){
document.getElementById("forTest").innerText = greeting("Ben");
document.getElementById("forTest2").innerText = double(20);
document.getElementById("forTest3").innerText = triple(200);
}

//Use the sum, double, and triple functions to perform calculations on user input collected from
// an HTML form. You can use the prompt function to collect input from the user in a pop-up
// window. For example, you can prompt the user for two numbers and display the sum, double,
// and triple of the sum of these numbers using your functions
function CalcuLate(inNum1, inNum2) {
        inNum1 = Number(document.getElementById("number1").value);
        inNum2 = Number(document.getElementById("number2").value);
        let sumTwo = sum(inNum1, inNum2)
        alert(sumTwo);
        let douValue =  double(sumTwo);
        alert(douValue);
        let triValue = triple(sumTwo);
        alert(triValue);
        document.getElementById("Summ").innerText = sumTwo;
        document.getElementById("Dou").innerText = douValue;
        document.getElementById("Tri").innerText = triValue;
}
//Define an anonymous function that takes a name as a parameter and logs a greeting to the
//console. Call the function with different names and verify that it logs the expected greeting to
//the console
const Great = function (NameA) {
        console.log("Hello" +" "+ NameA);
}
Great("Beam")
Great("Ben")
Great("Nobita")

//Define an arrow function that takes two numbers as parameters and returns the product of the
//two numbers. Call the function with different values and verify that it returns the expected
//output.
const proDuct = (Numb1,Numb2) => {
      return Numb1 + Numb2;
}
console.log(proDuct(12,2))
console.log(proDuct(2000,4));
console.log(proDuct(2000000,100000000));

//Define a higher-order function called calculator that takes two numbers and a function as
// parameters. The calculator function should use the provided function to perform a calculation
// on the two numbers and return the result. For example, calling calculator(2, 3, add) should
// return 5, while calling calculator(2, 3, (a, b) => a * b) should return 6.

const calCulator = function(nUmb1, nUmb2, call) {
        return call(nUmb1, nUmb2);
}
const add = (a,b) => a+b;
console.log(calCulator(20, 30, add));
console.log(calCulator(14,15, (nUmb1, nUmb2) => nUmb1 * nUmb2));

//Define a higher-order function called repeater that takes a string and a number as parameters,
// and a function that takes a string as a parameter. The repeater function should call the provided
// function with the string parameter the specified number of times and return the combined
// result. For example, calling repeater('Hello', 3, (str) => str.toUpperCase()) should return
// 'HELLOHELLOHELLO'

const rePeater = function(Word, Round, Up) {
        let fiNal = '';
        for (let i = 0; i < Round; i++) {
                fiNal += Up(Word);
        }
        return fiNal;
}
const  Upper = function (str) {
        return str.toUpperCase()
;
}
console.log(rePeater("HELLO", 3, Upper));
console.log(rePeater("COMP1235",10, Upper));

// Define a function called sum that takes any number of parameters and returns the sum of all the
// parameters. Use the rest parameter syntax to define the function. For example, calling sum(1, 2,
// 3) should return 6, while calling sum(4, 5, 6, 7) should return 22
const sumofAll = function (...EndNums){
        let sum = 0;
        for ( let I of EndNums ) {
                sum += I;
        }
        return sum;
}
console.log(sumofAll(1,2,3,4,5,7));
console.log(sumofAll(15,17,18,19,20));

//Define a function called max that takes any number of parameters and returns the largest of all
//the parameters. Use the rest parameter syntax to define the function. For example, calling
//max(1, 2, 3) should return 3, while calling max(4, 5, 6, 7) should return 7
const Max = (...ArrofNum) => Math.max(...ArrofNum); /// using Math.max build-in function
console.log(Max(10, 3, 5, 30, 2, 20, 356, 80));


// Define a function called concat that takes any number of string parameters and returns the
//concatenated string of all the parameters. Use the rest parameter syntax to define the function.
//For example, calling concat('Hello', ' ', 'World') should return 'Hello World', while calling
// concat('The', ' ', 'quick', ' ', 'brown', ' ', 'fox') should return 'The quick brown fox'.
const conCat = (...str) => {
        let result =''
        for (let i = 0; i < str.length; i++)
        {
         result += str[i]
        }
        return result;
}
console.log(conCat('The', ' ','quick', ' ','brown', ' ', 'fox'))


//Define a function called avg that takes any number of parameters and returns the average of all
// the parameters. Use the rest parameter syntax to define the function. For example, calling
// avg(1, 2, 3) should return 2, while calling avg(4, 5, 6, 7) should return 5.5.
const avg = (...params) => {
        let sumparams = 0;
        for (let i = 0; i < params.length; i++) {
                sumparams += params[i];
        }
        return avgValue = sumparams / params.length;
}
console.log(avg(1, 2, 3));
console.log(avg(4, 5, 6, 7));