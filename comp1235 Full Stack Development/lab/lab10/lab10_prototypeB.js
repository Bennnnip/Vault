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

function Turtle (name, speed){
    this.name = name;
    this.speed = speed;

    this.walk = function(withjump) {// Anon Syntax
        if (withjump) {
            console.log(this.name + "" + "is jumped!");
        }
    }
    eat = () => { // Arrow syntax
        console.log("Turtle is eating");
    }
}
// Add the new properties for the prototype and all its object
// Color
Turtle.prototype.color = "green";

//Add new protoype to all objects
Turtle.prototype.hit = function() {
    console.log("Turtle is hitting the angry mushroom :" + this.speed)
}


const bowser = new Turtle("mario", 20)
console.log(bowser);


const girlbowser= new Turtle("bowser", 14);
console.log(girlbowser);
girlbowser.speed = 15;
girlbowser.hit

bowser.walk(true)
girlbowser.walk(true)

//- add the method to the existing prototype that we did not define the constructor
String.prototype.printPretty = function(name){
    console.log("The last character of the string is" + this.charAt(this.length-1));
};
let myName = "Promkaew";
myName.printPretty();


