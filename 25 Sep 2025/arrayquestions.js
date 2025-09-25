/*
Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]
*/

const arr12 = [3, 5, 6];
const arr13 = [4, 5, 7];

const store = arr12.filter((item) => arr13.includes(item));

console.log(store);

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
Q21. Split an array into chunks of size n (last chunk may be smaller). 
Given: arr = [1, 2, 3, 4, 5], n = 2
Goal: Return [[1, 2], [3, 4], [5]]
*/

const arrchunk = [1, 2, 3, 4, 5];
const n = 2;

const result = [];

for (let i = 0; i < arrchunk.length; i += n) {
  result.push(arrchunk.slice(i, i + n));
}

console.log(result);

/* 
Q24. Union of two arrays (unique values, order by first appearance).
Given: arr1 = [1, 2, 2], arr2 = [2, 3] 
Goal: Return [1, 2, 3]
 */

const arr2 = [1, 2, 2];
const arr3 = [2, 3];

const union = [...new Set([...arr2, ...arr3])];
console.log(union);

/* 
Q12. Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3 
Goal: Return 3
 */

const arr6 = [3, 5, 3, 2, 3, 1];
const target = 3;

let count = 0;

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] === target) {
    count++;
  }
}

console.log(count);

/* 
Q18. Remove all falsy values (false, 0, '', NaN, null, undefined) from an array without using filter().
Given: arr = [0, 1, false, 2, '', 3, null] 
Goal: Return [1, 2, 3]
*/

const narr = [0, 1, false, 2, "", 3, null];

const resultss = [];

for (let i = 0; i < narr.length; i++) {
  if (narr[i]) {
    resultss.push(narr[i]);
  }
}
console.log(resultss);

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

const arr14 = [5, 8, 2, 4];
console.log(sumArray(arr14));

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
const arr15 = [1, 3, 2, 4];
console.log(productArray(arr15));

/* 
Q19. Insert a value at a given index (shift elements right, no splice). 
Given: arr = [10, 20, 30, 40], index = 2, value = 99
Goal: Return [10, 20, 99, 30, 40]
*/

const arr16 = [10, 20, 30, 40];
const index = 2;
const value = 99;

// Shift elements to the right
for (let i = arr16.length; i > index; i--) {
  arr16[i] = arr16[i - 1];
}

// Insert value
arr16[index] = value;

console.log(arr16);

/* 

Q26. Build a frequency map (object) counting how many times each element appears.
Given: arr = ['a', 'b', 'a', 'c', 'b', 'a'] 
Goal: Return {'a': 3, 'b': 2, 'c': 1}

*/

const arr7 = ["a", "b", "a", "c", "b", "a"];
const freqMap = {};

for (let i = 0; i < arr7.length; i++) {
  const char = arr7[i];
  freqMap[char] = (freqMap[char] || 0) + 1;
}

console.log(freqMap);

/* 
Q20. Delete the element at a given index (shift elements left, no splice).
Given: arr = [10, 20, 30, 40], index = 1 
Goal: Return [10, 30, 40]
*/

const arrdel = [10, 20, 30, 40];
const indexs = 1;

// Shift elements to the left from the given index
for (let i = indexs; i < arrdel.length - 1; i++) {
  arrdel[i] = arrdel[i + 1];
}

// Reduce the array size manually
arrdel.length = arrdel.length - 1;

console.log(arrdel);

/* 
Q3. Reverse the array without using any inbuilt array methods (no reverse, no push/pop). Use
two-pointer swapping or manual loop. Given: arr = [6, 7, 9, 1, 5]
Goal: Return [5, 1, 9, 7, 6]
*/

const arrswap = [6, 7, 9, 1, 5];

let left = 0;
let right = arrswap.length - 1;

while (left < right) {
  // Swap elements
  const temp = arrswap[left];
  arrswap[left] = arrswap[right];
  arrswap[right] = temp;

  left++;
  right--;
}

console.log(arrswap);

/*
Q4. Remove duplicate values from an array while preserving the first occurrence order (no Set).
Given: arr = [2, 3, 2, 4, 3, 5] 
Goal: Return [2, 3, 4, 5]
*/

const arrdup = [2, 3, 2, 4, 3, 5];
const res = [];
const seen = {};

for (let i = 0; i < arrdup.length; i++) {
  const item = arrdup[i];
  if (!seen[item]) {
    res[res.length] = item; // manual push
    seen[item] = true;
  }
}

console.log(res);

/*
Q5. Rotate the array to the left by k steps (in-place if possible). Given: arr = [1, 2, 3, 4, 5], k = 2
Goal: Return [3, 4, 5, 1, 2]
*/

const arrk = [1, 2, 3, 4, 5];
const k = 2;

const n2 = arrk.length;

for (let step = 0; step < k; step++) {
  const first = arrk[0];
  // Shift all elements to the left
  for (let i = 0; i < n2 - 1; i++) {
    arrk[i] = arrk[i + 1];
  }
  arrk[n2 - 1] = first;
}

console.log(arrk);

/*
Q6. Rotate the array to the right by k steps (in-place if possible).
Given: arr = [10, 20, 30, 40, 50], k = 1 Goal: Return [50, 10, 20, 30, 40]
*/

const arr = [10, 20, 30, 40, 50];
let k1 = 1;

let n1 = arr.length;

for (let step = 0; step < k1; step++) {
  const last = arr[n1 - 1];
  // Shift all elements to the right
  for (let i = n1 - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
}

console.log(arr);

/* 


Q33. Find any two numbers that sum to a target (return the pair or indices). 
Given: arr = [1, 4, 5, 3, 7], target = 8
Goal: Return [1, 7] or indices [0, 4]

*/

function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]; // return indices
        // Or return [arr[i], arr[j]]; // return values
      }
    }
  }

  return null;
}

const brutearr = [1, 4, 5, 3, 7];
const newtarget = 8;
console.log(twoSumBruteForce(brutearr, newtarget));
