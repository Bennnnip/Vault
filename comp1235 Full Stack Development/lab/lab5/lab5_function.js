/* lab5_function.js
Practice function in Javascript

- Parameters : are the variable name passed into the () in function
when the function is being defined

- Arguments : are the values of variables themselves that pass during
function call

- return


 */
// We can also define function without a return statement void returnE
// to defining function
function _calculate(num1, num2) {
    let quotient = num1 / num2;
    return quotient
}
// call console.log with variable from function will got error
// console.log(quotient) << cause quotient only available in function scope
// to let quotient available out of function is call the function as quotient
let quotient = _calculate(4,2)
console.log(quotient)