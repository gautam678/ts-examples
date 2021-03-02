let apples: number = 6;

let speed: string = "test";

let flag: boolean = true;

let nothingMuch: null = null;

// Array

let colors: String[] = ["red", "green", "blue"];

let numbers: number[] = [1, 2, 3, 4, 5, 5];

let flags: boolean[] = [true, false, true];

// Classes

// Object

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Type inference example

let arrayOfBoolean: boolean[] = [true, false, true];

let checkMark: boolean;

for (let i = 0; i < arrayOfBoolean.length; i++) {
  if (checkMark === arrayOfBoolean[i]) {
    console.log("Yes");
  }
}
