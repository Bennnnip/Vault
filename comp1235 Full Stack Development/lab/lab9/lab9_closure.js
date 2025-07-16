 /* lab9_closure.js
 --- Purpose
 1. inner function can directly access the variables ( and params) of the outer function
 2. syntax: nested functions
    - regular , anonnymous or arrow function
 3. For Anonymous and arrow function - they don't have a real name
 4. They only have pseudo-name which is just the name of the variable

  */

 // Define a regular syntax function called outer
 function outer(){
     let outervar = "secret"
     // define an anonymous function syntax call inner
     const inner = function () {
         console.log("trying to print outervar from inner function")
         console.log(outervar);
     }
     function inner_regular() {
         console.log("trying to print outervar from inner function")
         console.log(outervar);
     }
     const inner_arrow = () => {
         console.log("trying to print outervar from inner function")
         console.log(outervar);
     }
     // we need to call the inner function from outer function
     inner()
     inner_regular()
     inner_arrow()
     return inner
 };
 // call outer function in main execution

 const inner_return = outer();

 //we want to call the anonymous inner functiuon from main execution
 //that normally cannot define inner from main execution cause inner function undefined
 //in the main execution
 inner_return(); // this is how to call inner function that is the return of outer () in main execution

