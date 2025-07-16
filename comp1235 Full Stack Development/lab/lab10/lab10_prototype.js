/* lab10_prototype.js
focus on prototype
Prototype is an old version that is old version that is the basic version of classes
in javascript

Constructors -- special method
method is function is a classes
properties variables that defined in the class


Prototype name : Turtle
2 properties  : name, speed
2 regular method : walk, eat
 */

function Turtle (){
    this.name = "spotty";
    this.speed = 16;

    this.walk = function() { // Anon Syntax
        console.log("Turtle is walking");
    }
    eat = () => { // Arror syntax
        console.log("Turtle is eating");
    }
}
// Add the new properties for the prototype and all its object
// Color
Turtle.prototype.color = "green";

const bowser = new Turtle();
console.log(bowser);
bowser.name = "mario";

const girlbowser = new Turtle();
console.log(girlbowser);
