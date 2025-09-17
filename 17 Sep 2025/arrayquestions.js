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

Q21. Split an array into chunks of size n (last chunk may be smaller). 
Given: arr = [1, 2, 3, 4, 5], n = 2
Goal: Return [[1, 2], [3, 4], [5]]

*/

function chunkArray(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }

  return result;
}

// Example
let arr3 = [1, 2, 3, 4, 5];
let n3 = 2;

console.log(chunkArray(arr3, n3));

/* 
Q26. Build a frequency map (object) counting how many times each element appears.
Given: arr = ['a', 'b', 'a', 'c', 'b', 'a'] Goal: Return {'a': 3, 'b': 2, 'c': 1}
*/

function buildFrequencyMap(arr) {
  const freqMap = {};

  for (let item of arr) {
    if (freqMap[item]) {
      freqMap[item]++;
    } else {
      freqMap[item] = 1;
    }
  }

  return freqMap;
}

// Example usage:
const arr = ["a", "b", "a", "c", "b", "a"];
console.log(buildFrequencyMap(arr));

/* 
Q27. Find the most frequent element in an array; if tie, return any one. 
Given: arr = [2, 3, 2, 4, 4, 4, 3]
Goal: Return 4
*/

function mostFrequentElement(arr) {
  const freqMap = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let item of arr) {
    freqMap[item] = (freqMap[item] || 0) + 1;

    if (freqMap[item] > maxCount) {
      maxCount = freqMap[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

// Example usage:
const arr2 = [2, 3, 2, 4, 4, 4, 3];
console.log(mostFrequentElement(arr2));

/* 
Q41. Create an array of the first n squares.
Given: n = 5
Goal: Return [1, 4, 9, 16, 25]
*/

function generateSquares(n) {
  const squares = [];
  for (let i = 1; i <= n; i++) {
    squares.push(i * i);
  }
  return squares;
}

// Example usage:
const n = 5;
console.log(generateSquares(n));

/* 
Q42. Create an array with numbers from 1 to N (no Array.from). 
Given: N = 6
Goal: Return [1, 2, 3, 4, 5, 6]
*/

function createArray(N) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    result.push(i);
  }
  return result;
}

// Example usage:
const N = 6;
console.log(createArray(N));

/*
Q43. Reverse an array of strings (e.g., words) and join with spaces.
Given: arr = ['I', 'love', 'JS'] 
Goal: Return 'JS love I'
*/

function reverseAndJoin(arr) {
  return arr.reverse().join(" ");
}

// Example usage:
const arr16 = ["I", "love", "JS"];
console.log(reverseAndJoin(arr16));

/* 
Q44. Convert an array of numbers to strings (no map). 
Given: arr = [1, 2, 3]
Goal: Return ['1', '2', '3']
*/

function convertToStrings(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(String(arr[i])); // or arr[i].toString()
  }
  return result;
}

// Example usage:
const myarr = [1, 2, 3];
console.log(convertToStrings(myarr));
