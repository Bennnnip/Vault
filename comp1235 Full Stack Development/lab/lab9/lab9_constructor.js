/*
lab9 constructor.js
purpose :
-Defin ing objects using longhand and shorthand
- when define function within prototype = method > using anonymous fn
- e.g. with nested objects
- then use a constrcutor to make the definition of the object
reusable and so we can make many objects that are similar structor
 */
//base on the prototype object
// use the short-hand to define a human object
const human = {
    // add 2 properties, name="ben promkaew) and age (27) into human Object
    name : "Ben Promkaew",
    age : 27,
    // add the method eat to human object
    // the definition of the method is saved inside of the properties name eat
    eat: function (){
        return this.age
    }
}
// Access the properties and methods of the human object based on the object prototype
console.log(human.name);
console.log(human.eat());
//----------------------------------------------------------------------------------------------------
// use long-hand to define an inanimate object
//const inanimate = new object () // the name of constructor for a prototype
                                        // must match exactly of the name of the prototype
//----- constructor
function Person(name, age){
    this.name = name;
    this.age = age;
    // add a method called eat ()
   this.eat = function (){
       console.log("Called the eat method from the human object")
       return this.age
   }
}
// Add 2 properties to the constructor
// instantiate an object call person1 from the prototype person
const person1 = new Person("john", 27)
const person2 = new Person("john", 40)

console.log(person1); // the whole object that initiated
console.log(person1.age);
console.log(person2.eat());

