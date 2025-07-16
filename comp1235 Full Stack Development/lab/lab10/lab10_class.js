/* Lab10_class.js
Purpose Practice + defined class
Save  memory space because the class store definition of the method
that are common and shared between all objects
;therefore we 'NOT' add this keyword before object that make this.keyword
refer to name was called eg. bowser.walk, girlbowser.walk()
these 2 method can store as 1 ion the class definition instead .
 */

class Turtle {
    // define constructor here _p mean params
    constructor(name_p, speed_p) {
        this.name = name_p
        this.speed = speed_p
    }

// compare class define method outside the constrcutor but inside
// the class definition whereas Prototype define their method inside
// the constructor definition because Prototype not the class

// define 1 method = eat ()
// function keyword 'Not USE when define the method'
    eat() {
        console.log(this.name + "is eating");
    }

// define method = walk()
    walk(){
        console.log(this.name + "is walking" + this.speed);
    }
}
const bowser = new Turtle("mario", 15);
const peach = new Turtle("bowsy", 20);