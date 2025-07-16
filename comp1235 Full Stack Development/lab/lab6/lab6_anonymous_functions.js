/* lab6 anonymous function
    - Practice : Anonymous function
    - But you can add a pseudo-name for function's definition by saving
    = the function definition into a variable
    - these will be useful on for call back function
    - A callback fn is a fn definition passed an argument to another
    function call >> let calculate = (num1, num2, functionA) << passed an argument to another function call

 */
const calculate = function(num1, num2){
    return num1/num2;
}
console.log(calculate(1,2));
let result = calculate(1, 2);
console.log(result);
