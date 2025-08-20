/*
Q1. Merge two arrays (concatenate without removing duplicates).
Given: arr1 = [1, 2, 4], arr2 = [4, 6, 7] Goal: Return [1, 2, 4, 4, 6, 7]
*/

// Ans-1
const arr1 = [1, 2, 4];
const arr2 = [4, 6, 7];

function mergeArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  console.log(merged);
}

mergeArrays(arr1, arr2);

/*
Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr3 = [3, 5, 6], arr4 = [4, 5, 7]
Goal: Return [5]
*/

// Ans-2

const arr3 = [3, 5, 6];
const arr4 = [4, 5, 7];

function findIntersection(arr3, arr4) {
  const intersection = [...new Set(arr3.filter((num) => arr4.includes(num)))];
  console.log(intersection);
}

findIntersection(arr3, arr4);

/*
Q3. Reverse the array without using any inbuilt array methods (no reverse, no push/pop). Use
two-pointer swapping or manual loop. Given: arr = [6, 7, 9, 1, 5]
Goal: Return [5, 1, 9, 7, 6]

*/

// Ans-3

const arr5 = [6, 7, 9, 1, 5];

function reverseArray(arr5) {
  for (let i = 0, j = arr5.length - 1; i < j; i++, j--) {
    let temp = arr5[i];
    arr5[i] = arr5[j];
    arr5[j] = temp;
  }
  console.log(arr5);
}

reverseArray(arr5);

/*
Q4. Remove duplicate values from an array while preserving the first occurrence order (no Set).
Given: arr = [2, 3, 2, 4, 3, 5] Goal: Return [2, 3, 4, 5]
*/

//Ans-4
const arr6 = [2, 3, 2, 4, 3, 5];

function removeDuplicates(arr6) {
  const result = [];
  for (let i = 0; i < arr6.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr6[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[result.length] = arr6[i];
    }
  }
  console.log(result);
}

removeDuplicates(arr6);

/*
 Q7. Compute the sum of all numbers in the array (no reduce). 
Given: arr = [5, 8, 2, 4] Goal: Return 19 
*/

// Ans -7

arr7 = [5, 8, 2, 4];

function sumArray(arr7) {
  let total = 0;
  for (let i = 0; i < arr7.length; i++) {
    total += arr7[i];
  }
  console.log(total);
}

sumArray(arr7);

/*
Q8. Compute the product of all numbers in the array.
Given: arr = [1, 3, 2, 4] Goal: Return 24
*/

// Ans-8

arr8 = [1, 3, 2, 4];

function productArray(arr8) {
  let product = 1;
  for (let i = 0; i < arr8.length; i++) {
    product *= arr8[i];
  }
  console.log(product);
}
productArray(arr8);

/*
 Q9. Find the maximum number in the array (no Math.max spread). 
Given: arr = [9, 2, 17, 6, 4]
Goal: Return 17
*/

// Ans-9.

arr9 = [9, 2, 17, 6, 4];

function findMax(arr9) {
  let max = arr9[0];
  for (let i = 1; i < arr9.length; i++) {
    if (arr9[i] > max) {
      max = arr9[i];
    }
  }
  console.log(max);
}

findMax(arr9);

/*
Q10. Find the minimum number in the array.
Given: arr = [9, 2, 17, 6, 4] 
Goal: Return 2
*/

// Ans-10.

arr10 = [9, 2, 17, 6, 4];

function findMin(arr10) {
  let min = arr10[0];
  for (let i = 1; i < arr10.length; i++) {
    if (arr10[i] < min) {
      min = arr10[i];
    }
  }
  console.log(min);
}
findMin(arr10);

/*

Q11. Find the second largest number in the array (distinct values). 
Given: arr = [12, 7, 9, 15, 12]
Goal: Return 12

*/

// Ans: 11

arr11 = [12, 7, 9, 15, 12];

function secondLargest(arr11) {
  const uniqueArr = [...new Set(arr11)];
  uniqueArr.sort((a, b) => b - a);
  const second = uniqueArr[1];
  console.log(second);
}

secondLargest(arr11);

/*

 Q12. Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3 
Goal: Return 3

*/

// Ans -12

arr12 = [3, 5, 3, 2, 3, 1];
target = 3;

function countOccurrences(arr12, target) {
  let count = 0;
  for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] === target) {
      count++;
    }
  }
  console.log(count);
}
countOccurrences(arr12, target);
