/*
Q1. Merge two arrays (concatenate without removing duplicates).
Given: arr1 = [1, 2, 4], arr2 = [4, 6, 7] 
Goal: Return [1, 2, 4, 4, 6, 7]
*/

const arr1 = [1, 2, 4];
const arr2 = [4, 6, 7];

function mergeArrays(a1, a2) {
  return [...a1, ...a2];
}

console.log(mergeArrays(arr1, arr2));

/*
Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]
*/

const arr3 = [3, 5, 6];
const arr4 = [4, 5, 7];

function findIntersection(a1, a2) {
  const result = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i]) && !result.includes(a1[i])) {
      result[result.length] = a1[i];
    }
  }
  return result;
}

console.log(findIntersection(arr3, arr4));

/* 
Q3. Reverse the array without using any inbuilt array methods (no reverse, no push/pop). Use
two-pointer swapping or manual loop. Given: arr = [6, 7, 9, 1, 5]
Goal: Return [5, 1, 9, 7, 6]
*/

const arr5 = [6, 7, 9, 1, 5];

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

console.log(reverseArray(arr5));

/*
Q4. Remove duplicate values from an array while preserving the first occurrence order (no Set).
Given: arr = [2, 3, 2, 4, 3, 5] 
Goal: Return [2, 3, 4, 5]
*/

const arr6 = [2, 3, 2, 4, 3, 5];

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) result[result.length] = arr[i];
  }
  return result;
}

console.log(removeDuplicates(arr6));

/* 
Q5. Rotate the array to the left by k steps (in-place if possible). 
Given: arr = [1, 2, 3, 4, 5], k = 2
Goal: Return [3, 4, 5, 1, 2]
*/

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateLeft(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

let arr7 = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr7, 2));

/*
Q6. Rotate the array to the right by k steps (in-place if possible).
Given: arr = [10, 20, 30, 40, 50], k = 1 
Goal: Return [50, 10, 20, 30, 40]
*/

function rotateRight(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

let arr8 = [10, 20, 30, 40, 50];
console.log(rotateRight(arr8, 1));

/*
Q7. Compute the sum of all numbers in the array (no reduce). 
Given: arr = [5, 8, 2, 4]
Goal: Return 19
*/

const arr9 = [5, 8, 2, 4];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(arr9));

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

console.log(findMin(arr12)); // 2

/*
Q11. Find the second largest number in the array (distinct values). 
Given: arr = [12, 7, 9, 15, 12]
Goal: Return 12
*/

function secondLargest(arr) {
  // Remove duplicates using Set and convert back to array
  const uniqueArr = [...new Set(arr)];

  // Sort the array in descending order
  uniqueArr.sort((a, b) => b - a);

  // Check if there are at least two distinct values
  if (uniqueArr.length < 2) {
    return null; // or throw an error, depending on requirements
  }

  // Return the second largest
  return uniqueArr[1];
}

// Example usage:
const arr = [12, 7, 9, 15, 12];
console.log(secondLargest(arr));

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
Q16. Sort an array of small size using Bubble Sort (no sort()).
Given: arr = [5, 1, 4, 2, 8] 
Goal: Return [1, 2, 4, 5, 8]
*/

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap if elements are in wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // Optimization: stop if no swaps occurred in the pass
    if (!swapped) break;
  }

  return arr;
}

// Example usage:
const arr16 = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr16));

/*
Q17. Merge two sorted arrays into a single sorted array (two pointers). 
Given: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
Goal: Return [1, 2, 3, 4, 5, 6]
*/

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;

  // Compare and merge
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Append remaining elements (if any)
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example usage:
const arr17 = [1, 3, 5];
const arr18 = [2, 4, 6];
console.log(mergeSortedArrays(arr17, arr18));

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
Q19. Insert a value at a given index (shift elements right, no splice). 
Given: arr = [10, 20, 30, 40], index = 2, value = 99
Goal: Return [10, 20, 99, 30, 40]
*/

function insertAtIndex(arr, index, value) {
  // Shift elements to the right starting from the end
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  // Insert the value
  arr[index] = value;

  return arr;
}

// Example usage:
const arr20 = [10, 20, 30, 40];
const index = 2;
const value = 99;
console.log(insertAtIndex(arr20, index, value));

/* Q20. Delete the element at a given index (shift elements left, no splice).
Given: arr = [10, 20, 30, 40], index = 1 
Goal: Return [10, 30, 40] 
*/

function deleteAtIndex(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1; // Remove the last (now duplicate) element

  return arr;
}

// Example usage:
const arr21 = [10, 20, 30, 40];
const index2 = 1;
console.log(deleteAtIndex(arr21, index2));

/*

Q21. Split an array into chunks of size n (last chunk may be smaller). 
Given: arr = [1, 2, 3, 4, 5], n = 2
Goal: Return [[1, 2], [3, 4], [5]]
*/

function chunkArray(arr, n) {
  const result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }

  return result;
}

// Example usage:
const arr22 = [1, 2, 3, 4, 5];
const n = 2;
console.log(chunkArray(arr22, n));

/*
Q22. Flatten a one-level nested array without using flat().
Given: arr = [1, [2, 3], 4, [5]] 
Goal: Return [1, 2, 3, 4, 5]
*/

function flattenOneLevel(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let val of item) {
        result.push(val); // Push each element of the nested array
      }
    } else {
      result.push(item); // Push non-array item directly
    }
  }

  return result;
}

// Example usage:
const arr23 = [1, [2, 3], 4, [5]];
console.log(flattenOneLevel(arr23));

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
Q25. Intersection with counts (multiset intersection). 
Given: arr1 = [1, 2, 2, 3], arr2 = [2, 2, 4]
Goal: Return [2, 2]
*/

function multisetIntersection(arr1, arr2) {
  const result = [];
  const countMap = {};

  // Count elements in arr1
  for (let num of arr1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Check against arr2
  for (let num of arr2) {
    if (countMap[num] > 0) {
      result.push(num);
      countMap[num]--;
    }
  }

  return result;
}

// Example usage:
const arr28 = [1, 2, 2, 3];
const arr29 = [2, 2, 4];
console.log(multisetIntersection(arr28, arr29));
