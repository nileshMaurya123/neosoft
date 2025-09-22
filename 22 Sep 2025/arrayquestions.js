/*
Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]
*/

function findIntersection(arr1, arr2) {
  // Convert arrays to Sets for uniqueness
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Filter elements of set1 that are in set2
  const intersection = [...set1].filter((item) => set2.has(item));

  return intersection;
}

const arr3 = [3, 5, 6];
const arr4 = [4, 5, 7];
const commonNumbers = findIntersection(arr3, arr4);
console.log(commonNumbers);

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
const arr1 = [12, 7, 9, 15, 12];
console.log(secondLargest(arr1));

/*
Q32. Reverse an array in-place using two pointers (demonstrate indices swapping).
Given: arr = [11, 22, 33, 44] 
Goal: Return [44, 33, 22, 11]
*/

function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at left and right
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

const reversearr = [11, 22, 33, 44];
console.log(reverseInPlace(reversearr));

/*
Q50. Remove duplicates but keep first occurrence order (stable unique, no Set).
Given: arr = [4, 5, 4, 4, 2, 5, 1] 
Goal: Return [4, 5, 2, 1]
*/

function unique(arr) {
  const seen = {};
  const result = [];

  for (const item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }

  return result;
}

const arr = [4, 5, 4, 4, 2, 5, 1];
console.log(unique(arr));
