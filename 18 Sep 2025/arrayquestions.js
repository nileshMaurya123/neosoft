/* 
Q20. Delete the element at a given index (shift elements left, no splice).
Given: arr = [10, 20, 30, 40], index = 1 
Goal: Return [10, 30, 40]
*/

const arr2 = [10, 20, 30, 40];
const index = 1;

for (let i = index; i < arr2.length - 1; i++) {
  arr2[i] = arr2[i + 1];
}
arr2.length = arr2.length - 1;

console.log(arr2);

/*
Q29. Replace all occurrences of a value with another value. 
Given: arr = [1, 2, 2, 3, 2], from = 2, to = 9
Goal: Return [1, 9, 9, 3, 9]
*/

const arr3 = [1, 2, 2, 3, 2];
const from = 2;
const to = 9;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === from) {
    arr3[i] = to;
  }
}

console.log(arr3);

/*
Q30. Compute element-wise sum of two arrays of equal length.
Given: arr1 = [1, 2, 3], arr2 = [4, 5, 6] 
Goal: Return [5, 7, 9]
*/

const arr1 = [1, 2, 3];
const arr5 = [4, 5, 6];

const result = [];

for (let i = 0; i < arr1.length; i++) {
  result.push(arr1[i] + arr5[i]);
}

console.log(result);

/*
Q37. Compute the average (mean) of numbers in the array (integer or float). 
Given: arr = [10, 20, 30]
Goal: Return 20
*/
const arr4 = [10, 20, 30];

const sum = arr4.reduce((acc, val) => acc + val, 0);
const average = sum / arr4.length;

console.log(average);

/* 
Q38. Find the median of an odd-length array (you may sort or use selection).
Given: arr = [7, 1, 3] 
Goal: Return 3
*/

const arr6 = [7, 1, 3];
arr6.sort((a, b) => a - b);
const median = arr6[Math.floor(arr6.length / 2)];

console.log(median);

/*
Q45. Check if every element is even (no every()).
Given: arr = [2, 4, 6, 8] 
Goal: Return true
*/

const arr = [2, 4, 6, 8];

let allEven = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    allEven = false;
    break;
  }
}

console.log(allEven);

/* 
Q47. Find the index of the smallest element (first for ties).
Given: arr = [9, 4, 7, 2, 5] 
Goal: Return 3
*/

const smallarr = [9, 4, 7, 2, 5];

let minIndex = 0;
for (let i = 1; i < smallarr.length; i++) {
  if (smallarr[i] < smallarr[minIndex]) {
    minIndex = i;
  }
}

console.log(minIndex);
