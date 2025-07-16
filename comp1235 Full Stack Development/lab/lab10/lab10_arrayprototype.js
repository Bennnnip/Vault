/*
Purpose : array prototype practice
 */
const numb = [10, 14, 15, 3];
const filtered= numb.filter((currentElement) => currentElement > 5);
console.log(filtered);
const groceries_list = ["lectuce", "banana", "chicken"]
// inside of foreach is call back function normally use arrow function
// it contain 2 params =current element and current index
// use foreach loop to not use for i=0 i ++ something
groceries_list.forEach((currentElement, currentIndex) => {
    console.log("The current element :" +currentElement + " and the index :" +currentIndex);
})

const Rec = numb.reduce((accumulate, currentElement) => {
    return accumulate + currentElement});
console.log(Rec);



const Truth = numb.filter((currentElement) =>  currentElement % 2 === 0 );
console.log(Truth);
