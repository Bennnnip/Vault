/* This _json.js
Purpose :
Practice JSON strings and JSON Objects

 */

// Short form for defining/instantiating a new object's memory space from
// a class from Object templates using {}
// The JSON class = Object Class
// By instantianting an object from Object class =
// Instantiating an object frm JSPM Class
const weather_Object = {
    monday: "sunny",
    tuesday: "rainy"
}
// JSON string method or JSON class calling method
const Weather_data_str = JSON.stringify(weather_Object) // result is JSON String
console.log(Weather_data_str)

// create a JSON object then converted to JSON string
const weather_weeekend_data_str = '{"saturday": "sunny","wendesday": "cloudy"}' // this is JSON String
// Convert JSON String to JSON object
// console.log(weather_weeekend_data_str.wednesday) // undefined cause wednesday not object it's string cannot use .
const weather_JSON_object = JSON.parse(weather_weeekend_data_str)
// This already be an JSON Object so we can use . method to calling 
console.log(weather_JSON_object);
console.log(weather_JSON_object.saturday);


// Example of calling a method using . operator in an Object
// /e/.test("e")