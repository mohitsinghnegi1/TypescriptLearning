// Resource : //www.youtube.com/watch?v=NjN00cM18Z4

//typescript is nothing but a superset of javacritp
// to run typescript file we need to add tsc="tsc" inside package.json inside script tag
function run() {
  console.log('hello world');
}
run();

// var is available inside the function in which it is declared , if it is declared outside then it is present glabally

//whereas let is available to the nearest block instead of nearest function

// if we are working inside ts file then it detect error at compile time

//typescript compiler comple ts code in valid es5 javascript code

//typescript gives erorr but also generate valid javscript code

let count = 1;
// count = 'a'; //see how ts detects what is the previous type that is assingn to this count variable

//what if we don't know the type of the variable in the begining
let a; //see type of a is any type means we can assing any type to this variable like we can assign
a = 's';
a = true;
a = 1;
//she how even typescript did not give any error
//if you want typescript to give error
let b: number; //this is called annotation
// b=true //see this time ts comiler gave an eror saying we cant assing a bool value to a  number variable

//types in ts

let type1: number;
let type2: string;
let type3: boolean;
let type4: any;
let type5: number[] = [1, 24, 4, 66, 7, 89];
let type6: any[] = [1, false, '2'];
enum colors {
  Red = 1,
  green = 2,
  blue = 3,
}
console.log(colors.Red);

//new concept , dont change type of a variable but when we apply some function to that varaible
//let typescript know the type

let message;
message = 'Hello';

let endsWithO = (<string>message).endsWith('o');
let upperCase = (<string>message).toUpperCase();
console.log('yes', endsWithO);

//inline annotation

const drawPoint = (x: number, y: number) => {
  console.log(x, y);
};

// drawPoint('s', 'b');//see how we can avoid this type of errors using ts
drawPoint(1, 2);

const doSomething = (point: { x: number; y: number }) => {};

//if there are multiple arguments then better to pass object having similar properties
doSomething({ x: 1, y: 2 });

//instead of defining object every time, we can define an Interface which can be reused

//use pascal case for interface (explicit data type)
interface Point {
  x: number;
  y?: number;
}

const printCoordinates = (point: Point) => {
  console.log('x:', point.x, 'y: ', point.y);
};

printCoordinates({ x: 1, y: 2 }); //both paramenters are required

//In case you want to put related variable and function inside same class then this follows cohesion
//principle which says we should put similar entity and function in same block

class Point1 {
  constructor(point?: Point) {
    //this point is referring to Interface
    if (point) {
      this.x = point.x;
      this.y = point.y;
    }
  }
  x: number;
  y: number;
  drawPoint = () => {
    //add logic
    console.log(this.x, this.y);
  };
}

let obj1 = new Point1({ x: 1, y: 2 }); //typescript will first check how many paramenter we need to pass to the constructor and of which type
//if you pass wrong type argument to constructor then ts will automatically detect error as we are using interface in which type anotation is already defained
// for each variables

//in javacript we dont have a concept of multiple constructor
//but there is an alternate way to do it like if we only want to pass certain variable of the constructor then
// we can also do that after first optional variable all the variable on the right side are also optional

// let obj2 = new Point1({ x: 1 });//she it is giving errror in case constructor paramenter are not optional
let obj2 = new Point1(); //see since point object was optional we may not pass point object
let obj3 = new Point1({ x: 1 }); // see i have made Point interface y argument as optional so i may not pass
//y variable even then it will not give error

//what if we dont want to allow modification of class varaible after initialization

//1) we can first initaize class variable by using constructor - so for that we can use access modifiers

//there are three access modifier - public , private ,protected : this one is accessable in drived classs

class Access {
  constructor(x: number) {
    this.x = x;
  }
  private x: number;
}

//there is a clearner version of this code
//this ts code will automatically assign a argument value to class private variable
//we dont even need to explicitly create those variable
//typescript will automatically do it for us
class Access1 {
  constructor(private x: number) {}
}

//now there is a concept of property
//import module may be class function ,object , varaible from differnt file
import Prop from './Prop';

let obj4 = new Prop();
//see how i can able to use same name for setter and getter property
//we use camel case notation for function
// we use _ before variable to prevent any clashes
obj4.x = 5;
console.log(obj4.x);
