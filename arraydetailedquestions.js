// Q1. Merge two arrays (concatenate without removing duplicates)

const arr1 = [1, 2, 4];
const arr2 = [4, 6, 7];

function mergeArrays(a1, a2) {
  return [...a1, ...a2];
}

console.log(mergeArrays(arr1, arr2));

//  Q2. Find common numbers (intersection, unique)

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

// Q3. Reverse the array without using inbuilt methods

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

// Q4. Remove duplicates (preserve first occurrence, no Set)

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

// Q5. Rotate array to the left by k steps (in-place)

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

// Q6. Rotate array to the right by k steps (in-place)

function rotateRight(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

let arr8 = [10, 20, 30, 40, 50];
console.log(rotateRight(arr8, 1));

// Q7. Compute sum of array (no reduce)

const arr9 = [5, 8, 2, 4];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(arr9));

// Q8. Compute product of array

const arr10 = [1, 3, 2, 4];

function productArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(productArray(arr10));

// Q9. Find max number (no Math.max)

const arr11 = [9, 2, 17, 6, 4];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax(arr11));

//  Q10. Find min number

const arr12 = [9, 2, 17, 6, 4];

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(findMin(arr12)); // 2
