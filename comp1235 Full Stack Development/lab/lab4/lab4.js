/* Practice
-break statement to break out the loop in javascript
-Continue statement skip everything else and loop


- For Loop : Initialization; Condition; Incrementation
- While Loop : Condition < it might run forever >
- Math.random give only 0 and 1
- Math.floor to get positive int
*/
let someNumber = 1;
while (someNumber === 1) {
    console.log("inside of the while loop")
    let randomNumber = Math.floor(Math.random() * 100)
    // If the random number is divisible by 3
    console.log(randomNumber)
    if (randomNumber % 2 === 0) {
        continue;
        // continue not only break the loop in going to the top of the loop and test condition again
    }
    console.log("We finished checking if the number divisible by 2")
    if (randomNumber % 3 === 0) {
        console.log("Number is divisible by 3")
        break;
    }
    console.log("The while loop didn't break")
}