/* lecture 9 closure.js
closure :
-----------------------------------------
- Nested functions
- Could use normal, anonymous, or arrow function
 */
function outer() {
    // closure make it so that inner function has direct access to
    // all var defined in the outer function scope
    let outer_variable = 5;
    console,.log(main_exe_value)

    function innter () {
        let inner_variable = 10;
        console.log("The outer variable is : " + outer_variable)
        console.log(main_exe_value)
        // no return keyword use therefore, void is returned from inner function

    }
    console.log(inner_variable) // This will fail because inner value is not accessible in this scope
    inner()
}
let return_value = outer();
console.log(return_value);
console.log(outer_variable) // this will fail cause outer_variable is not accessible in this scope