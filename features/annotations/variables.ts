// const apples: number = 5;


let apples;


apples = 5;

let colors: string[] = ["red", "green", "blue"]
let myNumbers: number[] = [1, 2, 3];

// Classes
class Car {}
let car: Car = new Car();


// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};


// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}


// When to use annotations

// 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}';


const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);


// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

words.forEach(word => {
  if(word === "pink") {
    foundWord = true;
    return;
  }
  else foundWord = false;
})

console.log(`found word: ${foundWord}`);


// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach(number => {
  if(number > 0) {
    numberAboveZero = number;
  }
})
