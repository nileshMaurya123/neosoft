/* 
Q3. Reverse the array without using any inbuilt array methods (no reverse, no push/pop). Use
two-pointer swapping or manual loop. Given: arr = [6, 7, 9, 1, 5]
Goal: Return [5, 1, 9, 7, 6]
*/

const arr = [6, 7, 9, 1, 5];

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

console.log(reverseArray(arr));

/* 
Q28. Remove all occurrences of a value from an array (no filter).
Given: arr = [3, 1, 3, 2, 3, 4], value = 3 
Goal: Return [1, 2, 4]
*/

function removeAllOccurrences(arr, value) {
  const result = [];

  for (let item of arr) {
    if (item !== value) {
      result.push(item);
    }
  }

  return result;
}

// Example usage:
const arr3 = [3, 1, 3, 2, 3, 4];
const value = 3;
console.log(removeAllOccurrences(arr3, value));

/* 
Q36. Partition array into evens first then odds, preserving original order within each group.
Given: arr = [3, 8, 5, 12, 7, 6] 
Goal: Return [8, 12, 6, 3, 5, 7]
*/

function partitionEvenOdd(arr) {
  const evens = [];
  const odds = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  return [...evens, ...odds];
}

// Example usage:
const arr11 = [3, 8, 5, 12, 7, 6];
console.log(partitionEvenOdd(arr11));
