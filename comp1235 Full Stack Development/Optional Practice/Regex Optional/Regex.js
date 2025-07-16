let sIN = /[0-9]{9}/
let SinEG = "199299300";
let returnRegex = sIN.test(SinEG)
if (returnRegex === true) {
    document.write(returnRegex + " " +  "Matched" + "</br>")
} else {
    document.write("Unmatched" + "</br>")
}

let Post = /.{3}\S?.{4}/
let Code = "M4Y 2E1";
let checkcode = Post.test(Code);
if (checkcode === true) {
    document.write(checkcode + " " +  "Matched" + "</br>")
} else {
    document.write("Unmatched" + "</br>")
}

let Addr = /.+-?.+(Ontario)$/
let ExAddr = "101-55 Bloor Street West, Toronto, Ontario"
let checkaddr = Addr.test(ExAddr)
console.log(checkaddr);
if (checkaddr === true) {
    document.write(checkaddr + " " +  "Matched" + "</br>")
} else {
    document.write("Unmatched" + "</br>")
}

let Pattern = /^\(\d+\)(\d+)-?(\d{4})/
let pHone = "(416)888-4192"
let checkPhone = Pattern.test(pHone)
console.log(checkPhone);
if (checkPhone === true) {
    document.write(checkPhone + " " +  "Matched" + "</br>")
} else {
    document.write("Unmatched" + "</br>")
}