/*
Q1. Merge two arrays (concatenate without removing duplicates).
Given: arr1 = [1, 2, 4], arr2 = [4, 6, 7] 
Goal: Return [1, 2, 4, 4, 6, 7]
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 6, 7];

function mergeArrays(a1, a2) {
  return [...a1, ...a2];
}

console.log(mergeArrays(arr1, arr2));

/*
Q5. Rotate the array to the left by k steps (in-place if possible). 
Given: arr = [1, 2, 3, 4, 5], k = 2
Goal: Return [3, 4, 5, 1, 2]
*/

function rotateLeft(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    const first = arr.shift();
    arr.push(first);
  }
  return arr;
}

// Example:
console.log(rotateLeft([1, 2, 3, 4, 5], 2));

/* 
Q6. Rotate the array to the right by k steps (in-place if possible).
Given: arr = [10, 20, 30, 40, 50], k = 1 
Goal: Return [50, 10, 20, 30, 40]
*/

function rotateRight(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}

// Example:
console.log(rotateRight([10, 20, 30, 40, 50], 1));

/*
Q7. Compute the sum of all numbers in the array (no reduce). 
Given: arr = [5, 8, 2, 4]
Goal: Return 19
*/

const arr3 = [5, 8, 2, 4];

function sumArray(arr3) {
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
  }
  return sum;
}
console.log(sumArray(arr3));

/*
Q8. Compute the product of all numbers in the array.
Given: arr = [1, 3, 2, 4] 
Goal: Return 24
*/

const arr10 = [1, 3, 2, 4];

function productArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(productArray(arr10));

/* 
Q9. Find the maximum number in the array (no Math.max spread). 
Given: arr = [9, 2, 17, 6, 4]
Goal: Return 17
*/

const arr11 = [9, 2, 17, 6, 4];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax(arr11));

/*
Q10. Find the minimum number in the array.
Given: arr = [9, 2, 17, 6, 4] 
Goal: Return 2
*/

const arr12 = [9, 2, 17, 6, 4];

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(findMin(arr12));

/*
Q12. Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3 
Goal: Return 3
*/

function countOccurrences(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

// Example usage:
const count = [3, 5, 3, 2, 3, 1];
const target = 3;
console.log(countOccurrences(count, target));

/* 
Q13. Find the index of the first occurrence of a target value (manual search). 
Given: arr = [4, 7, 9, 7, 2], target = 7
Goal: Return 1
*/

function firstOccurrenceIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // if target not found
}

// Example usage:
const myarr = [4, 7, 9, 7, 2];
const mytarget = 7;
console.log(firstOccurrenceIndex(myarr, mytarget));

/*

Q14. Find the index of the last occurrence of a target value (manual search). 
Given: arr = [4, 7, 9, 7, 2], target = 7 
Goal: Return 3

*/

function lastOccurrenceIndex(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // if target not found
}

// Example usage:
const arr14 = [4, 7, 9, 7, 2];
const target14 = 7;
console.log(lastOccurrenceIndex(arr14, target14));

/*
Q15. Check if the array is sorted in non-decreasing order. 
Given: arr = [1, 2, 2, 4, 5] 
Goal: Return true
*/

function isSortedNonDecreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example:
const arr15 = [1, 2, 2, 4, 5];
console.log(isSortedNonDecreasing(arr15));

/* 
Q18. Remove all falsy values (false, 0, '', NaN, null, undefined) from an array without using filter().
Given: arr = [0, 1, false, 2, '', 3, null] 
Goal: Return [1, 2, 3]
*/

function removeFalsyValues(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      // only add truthy values
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage:
const arr19 = [0, 1, false, 2, "", 3, null];
console.log(removeFalsyValues(arr19));

/*

Q23. Elements in arr1 that are not in arr2 (relative difference). 
Given: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5]
Goal: Return [1, 2]
*/

function relativeDifference(arr1, arr2) {
  const result = [];

  for (let item of arr1) {
    if (!arr2.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

// Example usage:
const arr24 = [1, 2, 3, 4];
const arr25 = [3, 4, 5];
console.log(relativeDifference(arr24, arr25));

/* 
Q24. Union of two arrays (unique values, order by first appearance).
Given: arr1 = [1, 2, 2], arr2 = [2, 3] 
Goal: Return [1, 2, 3]
*/

function unionUnique(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  const result = [];
  const seen = new Set();

  for (let item of combined) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

// Example usage:
const arr26 = [1, 2, 2];
const arr27 = [2, 3];
console.log(unionUnique(arr26, arr27));

/*
Q31. Compute prefix sums (cumulative sums). 
Given: arr = [2, 1, 3, 4]
Goal: Return [2, 3, 6, 10]
*/

function prefixSums(arr) {
  const result = [];
  let sum = 0;
  for (const num of arr) {
    sum += num;
    result.push(sum);
  }
  return result;
}

// Example:
console.log(prefixSums([2, 1, 3, 4]));
