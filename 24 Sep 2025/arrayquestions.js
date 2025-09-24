/*
Q21. Split an array into chunks of size n (last chunk may be smaller). Given: arr = [1, 2, 3, 4, 5], n = 2
Goal: Return [[1, 2], [3, 4], [5]] 
*/

const arr = [1, 2, 3, 4, 5];
const n = 2;

const result = [];

for (let i = 0; i < arr.length; i += n) {
  result.push(arr.slice(i, i + n));
}

console.log(result);

/* 
Q24. Union of two arrays (unique values, order by first appearance).
Given: arr1 = [1, 2, 2], arr2 = [2, 3] 
Goal: Return [1, 2, 3]
*/

const arr1 = [1, 2, 2];
const arr2 = [2, 3];

const union = [...new Set([...arr1, ...arr2])];
console.log(union);

/* 
Q12. Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3 
Goal: Return 3
*/

const arr3 = [3, 5, 3, 2, 3, 1];
const target = 3;

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr3[i] === target) {
    count++;
  }
}

console.log(count);

/* 
Q23. Elements in arr1 that are not in arr2 (relative difference). 
Given: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5]
Goal: Return [1, 2]
*/

const arr4 = [1, 2, 3, 4];
const arr5 = [3, 4, 5];

const results = arr4.filter((item) => !arr5.includes(item));

console.log(results);

/* 
Q18. Remove all falsy values (false, 0, '', NaN, null, undefined) from an array without using filter().
Given: arr = [0, 1, false, 2, '', 3, null] 
Goal: Return [1, 2, 3]
*/

/* Step 1 => I will define an array 
Step 2 => I will take an empty array.
Step 3 => I will use for loop
*/

const newarr = [0, 1, false, 2, "", 3, null];

const falsevalue = [];

for (let i = 0; i < newarr.length; i++) {
  if (newarr[i]) {
    falsevalue.push(newarr[i]);
  }
}

console.log(falsevalue);

/* 
Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]
*/

/* 
Step 1: I will define a variable.
Step 2: I will use .filter and .includes method.


*/

const arr6 = [3, 5, 6];
const arr7 = [4, 5, 7];

const store = arr6.filter((item) => arr7.includes(item));

console.log(store);

/* 
Q26. Build a frequency map (object) counting how many times each element appears.
Given: arr = ['a', 'b', 'a', 'c', 'b', 'a'] 
Goal: Return {'a': 3, 'b': 2, 'c': 1}
*/

const freqarr = ["a", "b", "a", "c", "b", "a"];

const frequency = {};

for (const item of freqarr) {
  if (frequency[item]) {
    frequency[item]++;
  } else {
    frequency[item] = 1;
  }
}

console.log(frequency);

/* 
Q19. Insert a value at a given index (shift elements right, no splice). 
Given: arr = [10, 20, 30, 40], index = 2, value = 99
Goal: Return [10, 20, 99, 30, 40]
*/

const arr8 = [10, 20, 30, 40];
const index = 2;
const value = 99;

// Step 1: Make space by shifting elements to the right
for (let i = arr8.length; i > index; i--) {
  arr8[i] = arr8[i - 1];
}

// Step 2: Insert the value at the desired index
arr8[index] = value;

console.log(arr8);

/* 
Q1. Merge two arrays (concatenate without removing duplicates).
Given: arr1 = [1, 2, 4], arr2 = [4, 6, 7] 
Goal: Return [1, 2, 4, 4, 6, 7]
*/

const arr9 = [1, 2, 4];
const arr10 = [4, 6, 7];

const merged = [...arr9, ...arr10];
console.log(merged);

/* 
Q7. Compute the sum of all numbers in the array (no reduce). 
Given: arr = [5, 8, 2, 4]
Goal: Return 19
*/

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example:
const arr11 = [5, 8, 2, 4];
console.log(sumArray(arr11));

/* 
Q8. Compute the product of all numbers in the array.
Given: arr = [1, 3, 2, 4] 
Goal: Return 24
*/

function productArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

// Example:
const arr12 = [1, 3, 2, 4];
console.log(productArray(arr12));

/* 

Q9. Find the maximum number in the array (no Math.max spread). 
Given: arr = [9, 2, 17, 6, 4]
Goal: Return 17
*/

function findMax(arr) {
  let max = arr[0]; // Assume first element is max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example:
const maxarr = [9, 2, 17, 6, 4];
console.log(findMax(maxarr));

/*
Q10. Find the minimum number in the array.
Given: arr = [9, 2, 17, 6, 4] Goal: Return 2
*/

function findMin(arr) {
  let min = arr[0]; // Assume first element is min
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Example:
const minarr = [9, 2, 17, 6, 4];
console.log(findMin(minarr));
