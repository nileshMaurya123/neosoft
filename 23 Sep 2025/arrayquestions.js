/* 

Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]

*/

function findCommonElements(arr1, arr2) {
  const commonElements = arr1.filter((element) => arr2.includes(element));
  return commonElements;
}

const arr1 = [3, 5, 6];
const arr2 = [4, 5, 7];
const result = findCommonElements(arr1, arr2);
console.log(result);

/* 

Q4. Remove duplicate values from an array while preserving the first occurrence order (no Set).
Given: arr = [2, 3, 2, 4, 3, 5] 
Goal: Return [2, 3, 4, 5]

*/

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

const arr = [2, 3, 2, 4, 3, 5];
const results = removeDuplicates(arr);
console.log(results);

/* 


Q5. Rotate the array to the left by k steps (in-place if possible). 
Given: arr = [1, 2, 3, 4, 5], k = 2
Goal: Return [3, 4, 5, 1, 2]
*/

function rotateLeft(arr, k) {
  const n = arr.length;
  k %= n;

  const temp = arr.slice(0, k);

  // Shift n-k elements from last by k positions to the left
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  //  Copy the elements
  for (let i = 0; i < k; i++) {
    arr[n - k + i] = temp[i];
  }

  return arr;
}

const array = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateLeft(array, k));

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

const arr3 = [5, 8, 2, 4];
const sum = sumArray(arr);
console.log(sum);

/* 
Q8. Compute the product of all numbers in the array.
Given: arr = [1, 3, 2, 4] Goal: Return 24

*/

function productArray(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

const arr4 = [1, 3, 2, 4];
const product = productArray(arr4);
console.log(product);
