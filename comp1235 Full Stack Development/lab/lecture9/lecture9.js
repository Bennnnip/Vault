/* levture 9
Type of functions
-anonymous  >> No name
-arrow function < Start with syntax for anonymous function >
-regular function

Constructor :
-Normally constructor will match with the class  < Cannot be anonymous >

This Syntax
 */
// In comparison we will learn official classes in a few week
function Furniture(num_seats, weight_bearing){
    //properties of class
    this.usable = true;
    // these properties were initialized with params
    // but they could have been initialized with anythings
    this.num_seats = num_seats
    this.weight_bearing = weight_bearing
    // Method  for the class also the property

    this.use = () => {
        return num_seats;
    }
    this.throw_away = function(how_old) {
        if(how_old > 25) {
            return true;
        }
    }

    /* Prototypes are the old version of classes in Javascript
    If we use the constructor function using prototypes syntax
    we should not define a regular function within the constructpr
     Just anonymous or arrow functions. Otherwise this truly creates a nested function
     which not sanme with classses concept

     function method2() {
        return this.weight_bearing
     }
     */
}
kitchen_chair = new Furniture(,5, 60)
