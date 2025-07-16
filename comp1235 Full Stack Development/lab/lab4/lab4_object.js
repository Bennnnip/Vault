/*
purpose : pracetice creating objects in Javascript use short/long hand syntex
Object vs Class
Object
- item in the memory space (object) it's instantiation of a class
Class
- Template that you can use to creat multiple objects

Property/Attribute/Field:
Variable for a class but the value for the property can be different in each object

Object :
Name of the base class/parernt class in Javascript
All js Classeds are based on this Object class
 */
// Longhand instantiation of the object puma from the class Object
const puma = new Object();
puma.fur_color = "black";
puma.hearing_range = [0, 600];
puma.limbs = { // can nested object in longhand too
    legs : 2,
    arms : 2,
    tail : 1
}
// Shorthand Instantiation of the object puma from the class Object
const jaguar= {
    fur_color: "black",
    hearing_range: [0, 600],
    limb : {
        legs : 2,
        arms : 2,
        tail : 1
    }
}
//Shorthand Instantiation of the object puma from the class string
let username = "bob"

//longhand Instantiation of the object puma from the class string
let usernameLong = new String("bob")
