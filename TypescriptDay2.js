"use strict";
//typescript is an open source superset of javasript from microsoft
//it is not understandable by browser and have a compilar which convert ts code into plain javascript
//ts is static type checking while javascript does not know until runtime that what is the type of variable it is
// by default tyescript treats every file as a script which is global so write export {}   which export nothing
// terminal :  npm run tsc main --watch     this command will automatically convert tsc file to js file whenever we press save
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//
//we have a concept of multitype of tsc
var multitype;
multitype = 0;
multitype = 'sssss';
//we can use any type for this pupose but sincy tsc does not provide intellisence support for any type + if we
//assing a types then we will get an errror if we try to assign value of other types
//we have a optional type parameter in function as well as a default type paramaneter in the function
//  (in this case a default value will be there if optional vaue is not passed in the argument)
var compute = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
console.log(compute(10)); //in this case function will take default value ans =20
//declare an object type
var obj;
//now we will learn about classess
var Animal = /** @class */ (function () {
    //see by using acccess modifiers we dont need to create a var inside class tsc will automatically do it for us
    function Animal(type) {
        this.type = type;
        this.type = type;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bark = function () {
            console.log('Bhow bhow');
        };
        _this._drink = 'drinking';
        return _this;
    }
    Object.defineProperty(Dog.prototype, "drink", {
        get: function () {
            return this._drink;
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}(Animal));
var obj1 = new Dog(25); //see it directly passess value to super constructor
console.log(obj1.type);
console.log(obj1.bark());
console.log(obj1.drink);
module.exports = {};
