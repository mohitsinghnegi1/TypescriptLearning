//typescript is an open source superset of javasript from microsoft
//it is not understandable by browser and have a compilar which convert ts code into plain javascript
//ts is static type checking while javascript does not know until runtime that what is the type of variable it is
// by default tyescript treats every file as a script which is global so write export {}   which export nothing
// terminal :  npm run tsc main --watch     this command will automatically convert tsc file to js file whenever we press save

export = {}; // if you try to reinitialise same variable again without using export {} ts will give error
//npm run tsc TypescriptDay2 | node TypescriptDay2.js
//  there are two more type null and undefined

let noVal: null = null;
let notdefined: undefined = undefined;
//these two are not used generally bec they are considereed as a sub type of other type
let isValid: boolean = null; //this will be considered as a false value
let myDream: string = undefined;

//there are two syntax to declare an array
let digits: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let colors: string[] = ['red', 'blue', 'green'];

//declaring a type of each value in an array
let arr: [number, string] = [1, 'string']; //the order should be preserve
//2nd way
let arr1: any = ['1', 1, null, undefined, arr, {}]; // this is a tuple where each value can be of any type

enum Color {
  Red = 1,
  Blue = 6,
  Green,
}
//see we can assign only enum value to this variable
let value: Color = Color.Red;

// let value2:Color='223'//this will give error
let val: string = '33443';
let value3: Color = arr1; //this works [ '1', 1, null, undefined, [ 1, 'string' ], {} ] why?
console.log(value3);
console.log(Color[Color.Red]); //this will return Red  - ie we are able to access key using value unlike dict

//by default enum starts with the value 0 but you can change its by assign inital val to any variable
console.log(Color.Green); //this will return 7 since we have assign Blue=6 in enum and Green comes just after that

//typescript have a special variable any

let randomVal: any = 0;

// console.log(randomVal.name);
// randomVal();
// randomVal.toUpperCase();

//there is one special type in typescript 3.0 > unknown

let randomVal2: unknown = 'name'; //you cant directly access propery of these variable directly

// console.log((randomVal2 as object).name); Wrong

console.log((randomVal2 as string).toUpperCase());

// Do use the return type void for callbacks whose value will be ignored:

/* OK */
function fn(x: () => void) {
  x();
}
//

//we have a concept of multitype of tsc
let multitype: number | string;

multitype = 0;
multitype = 'sssss';

//we can use any type for this pupose but sincy tsc does not provide intellisence support for any type + if we
//assing a types then we will get an errror if we try to assign value of other types

//we have a optional type parameter in function as well as a default type paramaneter in the function
//  (in this case a default value will be there if optional vaue is not passed in the argument)

const compute = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};

console.log(compute(10)); //in this case function will take default value ans =20

//declare an object type
let obj: { name: string; class: number };

//now we will learn about classess
class Animal {
  //see by using acccess modifiers we dont need to create a var inside class tsc will automatically do it for us
  constructor(public type: number) {
    this.type = type;
  }
}

class Dog extends Animal {
  bark = () => {
    console.log('Bhow bhow');
  };
  private _drink: string = 'drinking';

  get drink(): string {
    return this._drink;
  }
}

const obj1 = new Dog(25); //see it directly passess value to super constructor
console.log(obj1.type);
console.log(obj1.bark());
console.log(obj1.drink);

//check if object is empty or not
function isEmpty(obj) {
  for (var prop in obj) {
    return false;
  }

  return true;
}

console.log(isEmpty({}));
