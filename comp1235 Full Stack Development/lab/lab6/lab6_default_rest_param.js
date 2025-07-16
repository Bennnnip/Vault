/*
can use below two types of params using any of the 3 func
- Regular func function Abc(params) {}
- Anonymous func function (params) {}
- Arrow function const Abc = (params)=> {}
Default params
----------------------------------------
- when calling  >> The order of default params is important because you cannot use only the last default param
- when defining >> and u cannot just define the first default prams as default and the last one not defined

Rest params
----------------------------------------
- simiiar tp spread ops (...) Used to when calling function
 */
// Anonymous function definition with default params
const add = function(num1, num2=7) {
    return num1 + num2;
}

// call anon function
console.log(add(5, 6));
console.log(add(10));

const subtract = function(num1 = 8, num2){
    return num1 - num2;
}
// u cannot put your default params at the start of the param list
console.log(subtract(5)); // This case num 2 not defined the result will show NaN (Not a number)

const multiply = (num1 = 3, num2= 4) =>  num1 * num2;
console.log(multiply(5,20));
console.log(multiply()) // 3 * 4 by default

//---------------------- Rest Params ----------------------------------------
// Anonymous function definition
// all-args  rest params will take as many as params as were passed in but place them all in to an arrays
const divide = function(...all_args){
    return all_args[0] / all_args[1];
};

// Call anonymous function
console.log(divide( 1, 2));

