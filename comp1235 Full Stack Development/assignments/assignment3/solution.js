"use strict";

function Circle(radius){
  this.radius = radius;
  // calculate area using this.area with => fn 2*PI*R power of  2 use Math.PI(for pi value) & parseFloat to accomondate
  // value of 2 floating point number(tofixed)
  this.area = () => {return parseFloat((Math.PI * radius * radius).toFixed(2))};
  // calculate perimeter using Math.PI ( for Pi value) 2*PI*R parseFloat and
  // tofixed accoumondate cal value of fix 2 floating number
  this.perimeter = () => {return parseFloat((2 * Math.PI * radius).toFixed(2))};
  }

const calculateSalary = (array) => {

  return array.reduce((total, hours, i) => {
    const weekEnd = i >= 5; // Sat is index 5 Sun index 6 (7 days from 0 (monday)
    const rateNorm = weekEnd ? 20 : 10; // chk that is weekend or not for base rate 10 and 20
    const rateOver = weekEnd ? 30 : 15; // chk that is weekend or not for Over time rate 15 and 30

    const Workhour = Math.min(hours, 8); // match the minimun number compare with 8 for cal normal work hour
    const Overhour = Math.max(hours - 8, 0); // match max number of hour - 8 if negative will match 0
    const Payday = ((Workhour * rateNorm) + (Overhour * rateOver)); //calculate in each index
    total += Payday; // accumulate into total variable
    return total; // return result in total
  }, 0);
}

const indexMultiplier = (array) => {
  return array.reduce((acc, item, i) => {
    return acc += item * i; // acc = accumulate value of item * i of it's self
  }, 0);
}

const filteredJSON = (array) => {
  return array.filter((element) => {
    const chkId = element.id > 10; // chk first condition that ID > 10 or not
    const chkUser = /^[M-Z]/i.test(element.u); // ChkUser by regex test function
    return chkId && chkUser; // return if ID > 10 and User start with character M-Z ignore case filter will show that
    // cause filtered accepted return true
  });
}
function breakAway(array, n){
  const Breakaway = [] //variable for result
  let Chunked = [] //variable to obtain the array the got push into chuncked
  array.forEach((element) => {
    Chunked.push(element);
    if (Chunked.length === n) { //when chumked.length = index number
      // chunked will got push into Breakaway array
      Breakaway.push(Chunked)
      Chunked = []; // after that clear chunked into empty array
    }
  });
  if (Chunked.length) {
    Breakaway.push(Chunked)
  }
  return Breakaway;
};

/* 
=================================================================
DO NOT MODIFY ANYTHING BELOW THIS LINE

*/
/*
export {
  Circle,
  calculateSalary,
  indexMultiplier,
  filteredJSON,
  breakAway
}
*/