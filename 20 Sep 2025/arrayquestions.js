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
const arrvalue = [10, 20, 30, 40];
const index = 2;
const value = 99;
console.log(insertAtIndex(arrvalue, index, value));

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
const arrflat = [1, [2, 3], 4, [5]];
console.log(flattenOneLevel(arrflat));

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
