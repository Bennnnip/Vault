/*
Purpose : Practice call back functions
A function definition : passed an arguments to another function call
A call back function itself is preferred to be a syntax of anon or arrow func ---- not regular function
the outer function that will accept call back function can be any function.
 */

// define an anonymous function
const exponent = function(num1, pwr, Intermediate_Calc) {
    // Add 3 to num 1 then do the power(pwr)
    intermediate_Calc(num1, 3) // Called back function
    return result ** pwr
}

/*// define an arrow function
const add = (num1, num2) => {
    return num1 + num2
}
*/
// pass add as a callback to exponent function
exponent(num1 = 4, pwr= 3 ,intermeddiate_Calc(num1, 3));

// Assignment 2 (
function outer () {
    // define an arrow function called inner
    const inner = () => {
        return 1
    }
    return inner
}
const inner = outer()  // or can use as outer()() second () is like inner
let iner = inner()
console.log(iner)
