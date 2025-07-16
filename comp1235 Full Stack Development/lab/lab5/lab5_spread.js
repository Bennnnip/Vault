/* Spread Operator

Purpose:
Use spread operator to individual seperate:
- the elements from an array
- the properties from an object

....

 */
// For an array, We use the const keyword to declare an array
// even though we can change the value of element
const friends = ["ashley", "min", "ben"]
friends[0] = "Lisa"
console.log(friends)
const new_friends = ["jenny", "tom"]
console.log(new_friends)
// extract individual element and place into new array
const all_friends = [...friends, ...new_friends];
console.log(all_friends)
// keep the hiercharcy of nested object
const all_friends_groups = [friends, new_friends]; // this result in 2 array
console.log(all_friends_groups)

//we can also use spread operator with _Object_ datatype ( object is base class in JS )
const grocery_lists = {
    fruit: 5,
    veggie: 4
}
const grocery_lists_extended = {
    milk: 1,
    beef: 1
}
const completed_grocery_lists = {
    ...grocery_lists, ...grocery_lists_extended
}
const not_Spread_lists = {
    grocery_lists,
    grocery_lists_extended
}
console.log(not_Spread_lists)
console.log(completed_grocery_lists);
let user = "bob"                // class is String
let pattern = /[a-c]$/         // class is Regular Expression