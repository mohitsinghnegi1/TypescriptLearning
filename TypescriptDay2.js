"use strict";
//typescript is an open source superset of javasript from microsoft
//it is not understandable by browser and have a compilar which convert ts code into plain javascript
//ts is static type checking while javascript does not know until runtime that what is the type of variable it is
// by default tyescript treats every file as a script which is global so write export {}   which export nothing
// terminal :  npm run tsc main --watch     this command will automatically convert tsc file to js file whenever we press save
//npm run tsc TypescriptDay2 | node TypescriptDay2.js
//  there are two more type null and undefined
var noVal = null;
var notdefined = undefined;
//these two are not used generally bec they are considereed as a sub type of other type
var isValid = null; //this will be considered as a false value
var myDream = undefined;
//there are two syntax to declare an array
var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var colors = ['red', 'blue', 'green'];
//declaring a type of each value in an array
var arr = [1, 'string']; //the order should be preserve
//2nd way
var arr1 = ['1', 1, null, undefined, arr, {}]; // this is a tuple where each value can be of any type
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Green"] = 7] = "Green";
})(Color || (Color = {}));
//see we can assign only enum value to this variable
var value = Color.Red;
// let value2:Color='223'//this will give error
var val = '33443';
var value3 = arr1; //this works [ '1', 1, null, undefined, [ 1, 'string' ], {} ] why?
console.log(value3);
console.log(Color[Color.Red]); //this will return Red  - ie we are able to access key using value unlike dict
//by default enum starts with the value 0 but you can change its by assign inital val to any variable
console.log(Color.Green); //this will return 7 since we have assign Blue=6 in enum and Green comes just after that
//typescript have a special variable any
var randomVal = 0;
// console.log(randomVal.name);
// randomVal();
// randomVal.toUpperCase();
//there is one special type in typescript 3.0 > unknown
var randomVal2 = 'name'; //you cant directly access propery of these variable directly
// console.log((randomVal2 as object).name); Wrong
console.log(randomVal2.toUpperCase());
// Do use the return type void for callbacks whose value will be ignored:
/* OK */
function fn(x) {
    x();
}
module.exports = {};
