/* lab 4 regular_expression
.    Represent any single character
[]   Represent single character from character c;lass
     Example [abcd] mean my expression can match a or b or c or d
\    Represent Escape Special character
     \n = new line; \t = Tab; \r = Carriage Return
     \\n = Escape twice to show "\n" (odd Position)
     \\\n = new line (Even position)
()   Represent capturing group
     (abc) my expression mush have abc not single character like []
^    (Anchor) to the Start String
$    (Anchor) to the  End String
     like (abc)$ meaning cannot have another character after abc

Quantifiers
a*    (0 or more) of the previous character like a* "" Match 0 of a is ok "a" Match
a?    (1 or 0) of the previous character : "" Match cause 0, "a" Match cause 1, "aaaaaa" Match, ^a?$ No match
a+    (1 or more) of the previous character
a{}   {x} exactly X
      {5, 20} between 5 and 20 ^a{1,10}$
      {5,} 5 and more
 */

// shorthand syntex for defining a new object of class RegExp
let phonePattern = /\(416\)444-5555/
let phonePattern2 = /\(416\)[0-9]{3}-[0-9]{4}/
let phoneNumber = "(416)444-5555"
// test() called regex function is used to match a regex to a string and return
// truer or false
let returnTest = phonePattern.test(phoneNumber)
document.write(phonePattern + "</br>")
document.write(phoneNumber + "</br>")
document.write(returnTest + "</br>")

// Exec() called regex function is used to match a regex to a string and return
// the part of string that match
let returnExec = phonePattern.exec(phoneNumber)
document.write(phonePattern + "</br>")
document.write(phoneNumber + "</br>")
document.write(returnExec + "</br>")

// Search function is called the string to match a regex and return positive number and
// negative number mean no match
let returnSearch = phoneNumber.search(phonePattern)
document.write(phonePattern + "</br>")
document.write(phoneNumber + "</br>")
document.write(returnSearch + "</br>")
