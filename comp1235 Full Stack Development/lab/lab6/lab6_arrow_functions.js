/*
Purpose : Practice defining functions without a name , saved to variables, but using the => symbol instead
Use is for callback function
Arrow Functions
const constantName = (parameters) => { //statement that run when the function is executed };

 */
// Function definition using arrow syntax

const calculate = (num1, num2) => {
return num1/num2 }

// when you have exactly 1 parameter (not 0), you can remove the round bracket for the parameter lists
// and also we can remove curry bracket because have only one line of code in body of the function.
const name_Welcome = name => {
    return "Welcome" + name
}
const Nick_name = names => "welcome" + names; // Short hand have 1 param and 1 line code *****

// call function
name_Welcome("Ben")
Nick_name("Ben")

// Define using arrow syntax the $ function
const $ = selector => document.querySelector(selector);
const param = $("paragraph") // Call function
console.log(param)


// function call
const result =calculate(1, 2)
console.log(result);
const calculate_alias = calculate;
console.log(calculate_alias)
let result2 = calculate_alias(10,5)
console.log(result2);

// compare to regular function syntax, whether it can be saved in 1 + usages
// regular func definitions can also be saved into a variable - but it's not often done
// because it would use extra memory source and the purpose of anonymous function
//is really ro use to call back function without have a function name

const calculate_regular = function calc_regular(num1, num2){
    return num1 / num2;
}
console.log(calculate_regular)
let result3 = calculate_regular(50,2);
console.log(result3);

