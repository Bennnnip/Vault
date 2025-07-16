//single line javascript comments
/* Multiline JS comment
let & const = local scope
var = global scope
 */

let username = "VissarutPromkaew"; // cannot specified data type can do only in Typescript
// if manual type : string above it will causes error
let tuitionFee = 100.56;
const isRegistered = true;

var userId = 101582010;
if (1 === "1") {
    document.write("1 === \"1\"? True")
} else {
    document.write("1 === \"1\"? False")
}

if (tuitionFee > 96) {
    //Print to dev space console
    console.log("Yes Tuition Fee is high")
} else if(isRegistered){ // NO need == True cause it is true as Const
    //Print to the webpage
    document.write("The user is registered");
} else if(username === "VissarutPromkaew") { // == equa check data type + value
    let passWord = prompt("Please enter your password")
} else {
    console.log("Non of this condition were true")
}
