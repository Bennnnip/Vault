// document.addEventListener(eventname,
document.addEventListener('DOMContentLoaded', () => {
    alert("DOM content loaded");
    //document.write("Welcome to the website");
    document.addEventListener('dblclick', () => {
        alert("your double clicked anywhere on the page")
    })
    signin_button_element = document.querySelector('#signin');
    console.log(signin_button_element);
    signin_button_element.addEventListener('click', () => {
        alert("Thank you for you sining in")

    })
// if we do not wait for the fom content beloaded first, All other element will not be accesible.
    const button_element = document.querySelector("#register")
    console.log(button_element);
    /*
    button_element.addEventListener("keydown",function(){
    console.log("This console log will never be called")
    })
     */
})
