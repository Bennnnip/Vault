/* lab5_String_methods.js

Purpose :
- charAt(index)
- indexOf(Search_string, start_index)
            inclusive , exclusive
- substring(start_index, stop_index)
- toLowerCase()
- toUpperCase()
*/
let username = "poppypop"
let fourth_char = username.charAt(4) // expected value is : y
document.write(fourth_char + '<br>');
let start_Index = username.indexOf("pop");
document.write(start_Index + '<br>'); // expected value is : 0 start index =0
let start_Index_2 = username.indexOf("pop", 2);
document.write(start_Index_2 + '<br>'); // expected  value is : 5 count from 2 until end of word

let user_sub = username.substring(3, 5)
// expected value is 2 PP not include 5 include 3
document.write(user_sub + '<br>');
let upper_case = username.toUpperCase();
document.write(upper_case + '<br>');