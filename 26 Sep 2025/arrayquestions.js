/* 
Q2. Find common numbers (intersection, unique) between two arrays. 
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]
*/

/* 

Steps to solve the problem.

Step 1. First define two array.
Step 2. After that create a function.
Step 3. After this I take an empty array.
Step 4. After this I will take 2 loops inner loop and outer loop.
Step 5. First loop iterates all elements of arr2.
Step 6. Second loop iterates all elements of arr3.
Step 7. After that I will compare both arrays using if condition.
Step 8. After this I will push the data into emptyarray.
Step 9. After this I console the emptyarray.
Step 10. At last I will call the function.

*/

const arr2 = [3, 5, 6];
const arr3 = [4, 5, 7];

function comparetwoarray() {
  let emptyarray = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr3.length; j++) {
      if (arr2[i] === arr3[j]) {
        emptyarray.push(arr3[j]);
      }
    }
  }

  console.log("Emptyarray =======>", emptyarray);
}
comparetwoarray();

/*
Q4. Remove duplicate values from an array while preserving the first occurrence order (no Set).
Given: arr = [2, 3, 2, 4, 3, 5] 
Goal: Return [2, 3, 4, 5]
*/

/* 
Steps to solve the problem.

Step 1: Create an empty array to store unique values
Step 2: Loop through each element in the input array
Step 3: Assume the current value is not yet in result
Step 4: Loop through result to check if arr[i] already exists
Step 5: If no duplicate was found, add the value to result
Step 6: Return the result array with no duplicates
*/

const arr4 = [2, 3, 2, 4, 3, 5];
function removeDuplicates() {
  const result = [];
  for (let i = 0; i < arr4.length; i++) {
    let exists = false; // Step 3

    for (let j = 0; j < result.length; j++) {
      // Step 4
      if (arr4[i] === result[j]) {
        exists = true;
        break;
      }
    }

    // Step 5

    if (!exists) {
      result[result.length] = arr4[i];
    }
  }
  return result;
}

console.log("Removeduplicates====>", removeDuplicates(arr4));

/* 

Q5. Rotate the array to the left by k steps (in-place if possible). 
Given: arr = [1, 2, 3, 4, 5], k = 2
Goal: Return [3, 4, 5, 1, 2]

*/

/* 
Steps to solve the problem.

Step 1: First we have to find the length of the array(n=5). From this we know how much we want to rotate array and which index to work on.
Step 2:  Let's create a new array rotated in which we will store the final rotated array.
Step 3:  We first add the elements from arr[k] to arr[n-1].
Step 4: Now we insert the first k elements of the array (from arr[0] to arr[k-1]).
*/

const arr5 = [1, 2, 3, 4, 5];
const k = 2;

function rotateLeftByK(arr5, k) {
  const n = arr5.length;
  const rotated = [];

  for (let i = k; i < n; i++) {
    rotated[rotated.length] = arr5[i];
  }
  for (let i = 0; i < k; i++) {
    rotated[rotated.length] = arr5[i];
  }
  return rotated;
}

console.log("RotatedArray====>", rotateLeftByK(arr5, k));

/* Q7. Compute the sum of all numbers in the array (no reduce). 
   Given: arr = [5, 8, 2, 4]
   Goal: Return 19
*/

/* 
Steps to solve the problem:

Step 1: Declare array with variable name arr which contain numbers.

Step 2: let sum = 0; Initializes a variable sum to 0. I start with zero so I can add each number from the array to it one by one.

Step 3: for (let i = 0; i < arr.length; i++) {

What it does:
Starts a for loop that goes through each element in the array using an index i.

Breakdown:

let i = 0  Start at index 0.

i < arr.length  Continue the loop while i is less than 4.

i++  Increase i by 1 after every loop iteration.

Step 4:  sum += arr[i];
This line adds each element (arr[i]) to the sum.

*/

const arr = [5, 8, 2, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("SumOfArray====>", sum);

/* 

Q8. Compute the product of all numbers in the array.
Given: arr = [1, 3, 2, 4] 
Goal: Return 24

*/

/* 

Steps to solve the problem

Step : 1 I create an array with name productarr which contain numbers.
Step : 2 I create a variable name product which value is set to 1. Multiplying with 1 does not change value. So its initial value set to 1.
Step:  3 for (let i = 0; i < productarr.length; i++) {

This is a for loop that starts with i = 0 (the first index of the array).

It will run while i is less than productarr.length (which is 4, since there are 4 elements).

After each iteration, i is incremented by 1 (i++), moving to the next element in the array.

Step 4 : I multiply the current product by the element at position i in productarr.
*/

const productarr = [1, 3, 2, 4];
let product = 1;

for (let i = 0; i < productarr.length; i++) {
  product *= productarr[i];
}

console.log("ProductOfArray====>", product);

/* 

Q9. Find the maximum number in the array (no Math.max spread). 
Given: arr = [9, 2, 17, 6, 4]
Goal: Return 17

*/

/* 
Steps to solve the problem:

Step : 1 Start by assuming first value of array is maximum.
Step : 2 Create a variable which will store maximum number.
Step : 3 Now I have to go through loop from index value 1 because we have assigned index value 0 of array to maximum.
Step : 4 Now we will use for loop in an array from index value 1.
Step : 5 Now we will compare the array values  one by one with index value 0. 
And if the number found in an array is greater than the index value 0. We will update the number in the variable max.

*/

function findmax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let maxarr = [9, 2, 17, 6, 4];
console.log("Maximum Number====>", findmax(maxarr));

/* 
Q10. Find the minimum number in the array.
Given: arr = [9, 2, 17, 6, 4] 
Goal: Return 2
*/

/* 
Steps to solve the problem:

Step : 1 Start by assuming first value of array is minimum.
Step : 2 Create a variable which will store minimum number.
Step : 3 Now I have to go through loop from index value 1 because we have assigned index value 0 of array to minimum.
Step : 4 Now we will use for loop in an array from index value 1.
Step : 5 Now we will compare the array values  one by one with index value 0. 
And if the number found in an array is smaller than the index value 0. We will update the number in the variable min.

*/

function findmin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let minarr = [9, 2, 17, 6, 4];
console.log("Minimum Number====>", findmin(minarr));

/* 
Q12. Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3 
Goal: Return 3
*/

/* 
Steps to solve the problem:
Step : 1 Let set the initial value of counter to zero.
Step : 2 Loop through each element of array one by one using for loop.
Step : 3 If current value of array matches the target value . Count value will be incremented.
Step : Now my loop will have 2nd element. 2nd element is 5. and my target is 3. as i know that 5 is not equal to 3. so if condition will not run. if if condition will not run, my count will not increase.
-- now in loop 3rd element i will get. my 3rd eleemnt is 3. and my target is 3. as i know that 3 is equal to 3. so my if condition code will run. and i know that if if contion will run, my count will be increament to 2. 
-- now , there are no element remaining in my for loop. so code execution will happen below for loop. line no 287 , there is no code.
-- now code will reach line number 289, here i m returning the count. as i know that count is 2 as of now. 2 value will be returned from this function.
*/

function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

const arrCountOccurence = [3, 5, 3, 2, 3, 1];
const target = 3;

console.log(
  "CountOccurrence Number=====>",
  countOccurrences(arrCountOccurence, target)
);
