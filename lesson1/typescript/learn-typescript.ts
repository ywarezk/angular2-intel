// import * as constants from './const';

// declare variables

// for(var i=0; i<10; i++){
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
// }

// function sayHello(isBoolean){
//     if(isBoolean){
//         var message = 'hello world';
//     }
//     console.log(message);
// }
// sayHello(true);
// sayHello(false);

// let numberExample = 3;
//
// for(let i=0; i<10; i++){
//     for(let i=0; i<10; i++){
//         console.log(i);
//     }
// }
//
// function sayHello(isBoolean){
//     if(isBoolean){
//         let message = 'hello world';
//     }
//     console.log(message);
// }
// sayHello(true);
// sayHello(false);

// const numberExample = 3;
//
// const objectExample = [];
// const objectExample = 3;
// objectExample.push(1);

// function Person(age){
//     this.age = age;
//     this.birthday = () => {
//         this.age++;
//     }
//
//     this.getAge = () => this.age
// }
//
// const yariv = new Person(31);
//
// setTimeout(yariv.birthday, 1000);
//
// setTimeout(function(){
//     console.log(yariv.age);
// }, 2000);

// Modules

// console.log(constants.GREETING);

// Type Annotation


// primitive types

// let numberExample : number;
// let booleanExample : boolean = true;
// let stringExample : string;
//
// //Arrays
//
// let arrayExample : Array<number> = [];
// let arrayExampleString : string[] = [];
//
//
// // interface
// // {name : 'yariv', age: 31}
interface Pokemon{
    name : string,
    age : number
}
// let person : Pokemon = {
//     name: 'yariv',
//     age: 31
// };
//
// function sayHello() : void {
//
// }

// let myNumber : number = 3;
// let myNumberString : string = '3';
//
// myNumberString = (<string>myNumber);

// Classes

// class SeaPokemon implements Pokemon{
//
//     constructor(public name : string, public age : number = 7){
//
//     }
//
//     sayHello(){
//         console.log('hello world');
//     }
// }
//
// const pikachu = new SeaPokemon('pikachu');
// pikachu.sayHello();
// console.log(pikachu.age);



// Exercise
// 1. define a class name pokemon
// 2. implemen a claa that inherits pokemon
// 3. practice define variables
// 4. implement a different file called constants with string constants






