// Q26. What is the difference between map() and forEach()?

// Answer 26:

/*

forEach(): Used to iterate over an array and perform an action for each element. 
It does not return a new array; it simply executes a function for its side effects.

map(): Creates a new array by applying a function to each element of the array. 
It returns a new array containing the results of the function.

*/

// forEach()

let numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2);
});

// map()

let numbers9 = [1, 2, 3];
let doubled = numbers9.map((num) => {
  return num * 2;
});

console.log(doubled);

// Q27.  How do you filter elements of an array?

// Answer 27:

let words = ["sun", "planet", "moon", "star"];

let longWords = words.filter((word) => word.length > 4);

console.log(longWords);

// Q28. How do you reduce an array to a single value?

// Answer 28:

let numbers2 = [1, 2, 3, 4];

let sum = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// Q 29.  How do you find the maximum value in an array?

// Answer 29:

let numbers3 = [5, 12, 8, 21, 3];

let max = Math.max(...numbers3);

console.log(max);

// Q30. How do you find the minimum value in an array?

// Answer 30:

let numbers4 = [5, 12, 8, 21, 3];

let min = Math.min(...numbers4);

console.log(min);

// Q31. How do you flatten a nested array?

// Answer 31:

let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());

// Q 32. How do you find duplicate elements in an array?

// Answer 32:

let arr3 = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];
let p = arr3.filter((each, index) => {
  return arr3.indexOf(each) !== index;
});
console.log(p);

// Q 33. How do you remove duplicate elements from an array?

// Answer 33:

const arr2 = [1, 2, 3, 3, 4, 5, 5, 6];

const uniqueArr = arr2.filter((item, index) => arr2.indexOf(item) === index);

console.log(uniqueArr);

// Q 34. How do you check if all elements in an array satisfy a condition?

// Answer 34:

const numbers5 = [2, 4, 6, 8, 10, 12];

const allEven = numbers5.every((number) => {
  return number % 2 === 0;
});
console.log(allEven);

// Q 35. How do you check if some elements in an array satisfy a condition?

// Answer 35:

const numbers6 = [1, -2, 3, 4];

const hasNegative = numbers6.some((num) => num < 0);

console.log(hasNegative);

// Q 36. How do you find the first element that satisfies a condition?

// Answer 36:

// Syntax: array.find(callback(element, index, array))

const numbers7 = [3, 7, 12, 18, 5];

const firstBig = numbers7.find((num) => num > 10);

console.log(firstBig);

// Q-37. How do you find the index of the first element that satisfies a condition?

// Answer - 37:

const numbers8 = [4, 8, 15, 16, 23, 42];

const index = numbers8.findIndex((num) => num > 10);

console.log(index);

// Q 38. What is the difference between find() and filter()?

// Answer - 38:

// .find() - Finds the first match

const nums8 = [1, 3, 5, 7, 8, 9];

const firstEven = nums8.find((n) => n % 2 === 0);

console.log(firstEven);

// .filter() - Finds all matches

const nums9 = [1, 3, 5, 7, 8, 9];

const allEvens = nums9.filter((n) => n % 2 === 0);

console.log(allEvens);

// Q-39 How do you fill an array with a specific value?

// Answer -39 :

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits);

// Q -40: How do you create an array of numbers from 1 to 10?

// Answer -40:

let numbers10 = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(numbers10);

// Q-41:  How do you check if an array is empty?

// Answer 41:

let arr4 = [];

if (arr4.length === 0) {
  console.log("Array is empty");
}

// Q-42: How do you clone an array using spread operator?

// Answer -42:

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

// Q 43: How do you destructure an array?

// Answer- 43:

const arr5 = [10, 20, 30];

// Destructure first two elements
const [a, b] = arr5;

console.log(a); // 10
console.log(b);

// Q-44: How do you swap two elements in an array?

// Answer- 44:

let arr6 = [1, 2, 3, 4];

// Swap elements at index 0 and 2
[arr6[0], arr6[2]] = [arr6[2], arr6[0]];

console.log(arr6); // [3, 2, 1, 4]

// Q-45: How do you shuffle an array randomly?

// Answer- 45:

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let arr7 = [1, 2, 3, 4, 5];
shuffle(arr7);
console.log(arr7);

// Q -46: How do you check if two arrays are equal?

// Answer-46:

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [3, 2, 1]));

// Q -47: How do you remove falsy values from an array?

// Answer 47 :

const arr8 = [0, 1, false, 2, "", 3, null, undefined, NaN];
const filtered = arr8.filter(Boolean);

console.log(filtered);

// Q-48: How do you get unique values from an array?

// Answer 48:

const arr9 = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr9)];

console.log(unique);

// Q -49 How do you convert an array of strings to numbers?

// Answer 49:

const strArr = ["1", "2", "3"];
const numArr = strArr.map(Number);

console.log(numArr);

// Q-50 How do you check if an array contains only numbers?

// Answer 50 :

const arr = [1, 2, 3, 4];

const onlyNumbers = arr.every((item) => typeof item === "number");

console.log(onlyNumbers);
