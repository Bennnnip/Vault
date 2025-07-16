/* lab9_event.js
Purepose
understand (and memorized) the common event in JS
DOMContentLoaded - this is the most important event because we wait for this event first
before we can do anything else such as selecting html elements or listening on HTML element
- click
- dblclick
- mouseover
- change

- listen for those event and call another function (callback) using the eventListener
-  __________.addEventListener(event, callback_function) // document(wholepage) is an option can use some object to call
- Event Handlers in HTML
- onclick
- ondblclick
- onmouseover
- onchange

--- callback function : the definition of a function is
passed an argument to another function call
- best function syntax for callback function is arrow function(no-name/anonymous function but in shorter syntax)

 */
document.addEventListener('DOMContentLoaded',() => {
    alert("The entire page has loaded")

    const register_button = document.querySelector("#register")
//document.getElementby
    console.log(register_button);
    register_button.addEventListener("click", () => {
        console.log("the button has been clicked")
    });
});