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
Q29. Replace all occurrences of a value with another value. 
Given: arr = [1, 2, 2, 3, 2], from = 2, to = 9
Goal: Return [1, 9, 9, 3, 9]
*/

function replaceAll(arr, from, to) {
  const result = [];

  for (let item of arr) {
    if (item === from) {
      result.push(to);
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example usage:
const arr4 = [1, 2, 2, 3, 2];
const from = 2;
const to = 9;
console.log(replaceAll(arr4, from, to));

/* 
Q30. Compute element-wise sum of two arrays of equal length.
Given: arr1 = [1, 2, 3], arr2 = [4, 5, 6] 
Goal: Return [5, 7, 9]
*/

function elementWiseSum(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  return result;
}

// Example usage:
const arr1 = [1, 2, 3];
const arr5 = [4, 5, 6];
console.log(elementWiseSum(arr1, arr5));

/* 
Q31. Compute prefix sums (cumulative sums). 
Given: arr = [2, 1, 3, 4]
Goal: Return [2, 3, 6, 10]
*/

function prefixSums(arr) {
  const result = [];
  let sum = 0;

  for (let num of arr) {
    sum += num;
    result.push(sum);
  }

  return result;
}

// Example usage:
const arr6 = [2, 1, 3, 4];
console.log(prefixSums(arr6));

/*
Q32. Reverse an array in-place using two pointers (demonstrate indices swapping).
Given: arr = [11, 22, 33, 44] 
Goal: Return [44, 33, 22, 11]
*/

function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap arr[left] and arr[right]
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers
    left++;
    right--;
  }

  return arr;
}

// Example usage:
const arr7 = [11, 22, 33, 44];
console.log(reverseInPlace(arr7));

/*
Q33. Find any two numbers that sum to a target (return the pair or indices). 
Given: arr = [1, 4, 5, 3, 7], target = 8 
Goal: Return [1, 7] or indices [0, 4]
*/

function findPairWithSum(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num]; // Return the pair
    }
    seen.add(num);
  }

  return null; // No pair found
}

// Example usage:
const arr8 = [1, 4, 5, 3, 7];
const target = 8;
console.log(findPairWithSum(arr8, target));

/* 
Q34. Find all pairs of numbers that sum to a target (no duplicates, i < j).
Given: arr = [2, 4, 3, 5, 7, 8, 9], target = 7 
Goal: Return [[2, 5], [4, 3]] (order may vary)
*/

function findAllPairs(arr, target) {
  const result = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    // Only add pair if complement is in seen and i > j (i.e. arr[i] came after complement)
    if (seen.has(complement)) {
      result.push([complement, arr[i]]);
    }

    // Add current number to seen set
    seen.add(arr[i]);
  }

  return result;
}

// Example usage:
const arr9 = [2, 4, 3, 5, 7, 8, 9];
const target2 = 7;
console.log(findAllPairs(arr9, target2));

/* 
Q35. Move all zeros to the end while maintaining the relative order of non-zero elements (in-place). 
Given: arr = [0, 1, 0, 3, 12]
Goal: Return [1, 3, 12, 0, 0]
*/

function moveZerosToEnd(arr) {
  let nonZeroPos = 0;

  // First pass: move non-zero elements forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroPos] = arr[i];
      nonZeroPos++;
    }
  }

  // Second pass: fill remaining positions with zeros
  for (let i = nonZeroPos; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

// Example usage:
const arr10 = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr10));

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

/* 
Q37. Compute the average (mean) of numbers in the array (integer or float). 
Given: arr = [10, 20, 30]
Goal: Return 20
*/

function computeAverage(arr) {
  if (arr.length === 0) return null; // Avoid division by zero

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
}

// Example usage:
const arr12 = [10, 20, 30];
console.log(computeAverage(arr12));

/* 
Q38. Find the median of an odd-length array (you may sort or use selection).
Given: arr = [7, 1, 3] 
Goal: Return 3
*/

function findMedian(arr) {
  const sorted = [...arr].sort((a, b) => a - b); // Sort ascending
  const middleIndex = Math.floor(sorted.length / 2);
  return sorted[middleIndex];
}

// Example usage:
const arr13 = [7, 1, 3];
console.log(findMedian(arr13));

/*
Q39. Given a sorted array, remove adjacent duplicates in-place and return the new length; also return the resulting array prefix.
Given: arr = [1, 1, 2, 2, 3]
Goal: New length 3, array becomes [1, 2, 3, _, _]
*/

function removeAdjacentDuplicates(arr) {
  if (arr.length === 0) return 0;

  let writeIndex = 0;

  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== arr[writeIndex]) {
      writeIndex++;
      arr[writeIndex] = arr[readIndex];
    }
  }

  return writeIndex + 1;
}

// Example usage:
const arr14 = [1, 1, 2, 2, 3];
const newLength = removeAdjacentDuplicates(arr14);

console.log("New length:", newLength);
console.log("Modified array prefix:", arr14.slice(0, newLength));
console.log("Full array after modification:", arr14);

/* 
Q40. Find the length of the longest strictly increasing contiguous subarray. 
Given: arr = [1, 2, 2, 3, 4, 1]
Goal: Return 3 (for [2, 3, 4])
*/

function longestIncreasingSubarray(arr) {
  if (arr.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1; // Reset for a new potential subarray
    }
  }

  // Compare the last subarray length
  maxLength = Math.max(maxLength, currentLength);

  return maxLength;
}

// Example usage:
const arr15 = [1, 2, 2, 3, 4, 1];
console.log(longestIncreasingSubarray(arr15));

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

/*
Q45. Check if every element is even (no every()).
Given: arr = [2, 4, 6, 8] Goal: Return true
*/

function allEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false; // Return false as soon as we find an odd number
    }
  }
  return true; // All elements are even
}

// Example usage:
const myarr2 = [2, 4, 6, 8];
console.log(allEven(myarr2));

/* 
Q46. Check if at least one element is greater than a threshold (no some()). 
Given: arr = [4, 9, 1], threshold = 8
Goal: Return true
*/

function isGreaterThanThreshold(arr, threshold) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      return true; // Return true as soon as we find an element greater than threshold
    }
  }
  return false; // If no element is greater than the threshold
}

// Example usage:
const myarr3 = [4, 9, 1];
const threshold = 8;
console.log(isGreaterThanThreshold(myarr3, threshold));

/* 
Q47. Find the index of the smallest element (first for ties).
Given: arr = [9, 4, 7, 2, 5] 
Goal: Return 3
*/

function findSmallestIndex(arr) {
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

// Example usage:
const myarr4 = [9, 4, 7, 2, 5];
console.log(findSmallestIndex(myarr4));

/*
Q48. Swap the positions of the minimum and maximum elements in the array. 
Given: arr = [5, 1, 9, 3]
Goal: Return [5, 9, 1, 3]
*/

function swapMinMax(arr) {
  // Find the indices of the min and max elements
  const minIndex = arr.indexOf(Math.min(...arr));
  const maxIndex = arr.indexOf(Math.max(...arr));

  // Swap the elements
  [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

  return arr;
}

// Example usage:
const myarr5 = [5, 1, 9, 3];
console.log(swapMinMax(myarr5));

/* 
Q49. Shuffle the array using the Fisher–Yates algorithm (show final shuffled array; randomness may
vary).
Given: arr = [1, 2, 3, 4]
Goal: Return a permutation like [3, 1, 4, 2]
*/

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }

  return arr;
}

// Example usage:
const myarr6 = [1, 2, 3, 4];
console.log(shuffleArray(myarr6));

/* 
Q50. Remove duplicates but keep first occurrence order (stable unique, no Set).
Given: arr = [4, 5, 4, 4, 2, 5, 1] 
Goal: Return [4, 5, 2, 1]
*/

function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true; // Mark the element as seen
      result.push(arr[i]); // Add it to the result array
    }
  }

  return result;
}

// Example usage:
const myarr7 = [4, 5, 4, 4, 2, 5, 1];
console.log(removeDuplicates(myarr7));
