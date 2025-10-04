/*

q1 ->1 - Multiply all elements by 2. arr = [ 2,3,4,5]
output result = [4,6,8,10]

q2 -> 2 - Print this pattern in console , n = 3

* *
*
*

Q3. Find the Smallest Element
Given an array arr = [8, 3, 6, 1, 9], find the smallest number without using any built-in methods.

Q4. Reverse the Array
Given an array arr = [1, 2, 3, 4, 5], reverse the array manually (don’t use .reverse() method).

Q5. Count Occurrences of a Number
Given an array arr = [2, 4, 2, 6, 2, 8] and a number x = 2, count how many times x appears in the array.

*/

/*
q2 -> 2 - Print this pattern in console , n = 3

* *
*
*

*/

/* 
Steps to Solve:
1. First I will define a function pattern.
2. Then I will run a for loop till when i value is equal to 1 and i value is equal to 3 or less than 3 my loop will run.
3. When i value equals to 1 it will print 2 stars. In else condition it will print 1 star.
4. At last I will call my function.
*/

function pattern() {
  for (let i = 1; i <= 3; i++) {
    if (i === 1) {
      console.log("* *");
    } else {
      console.log("*");
    }
  }
}
pattern();

/* 

Q4. Reverse the Array
Given an array arr = [1, 2, 3, 4, 5], reverse the array manually (don’t use .reverse() method).
*/

/* 
Steps to Solve:
1. First I will define a function named reversearray and pass a parameter arr in it.
2. After that I will create emptyarr;
3. Then I will use for loop on my given array.
4. Then I will right a logic to reverse the given array.
5. Then I will return an emptyarray.
6. At last I will call my function.

*/

function reverseArray(arr) {
  const emptyArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    emptyArr[arr.length - 1 - i] = arr[i];
  }
  return emptyArr;
}
const arr2 = [6, 7, 9, 1, 5];
console.log("Q4: ReverseArray===>", reverseArray(arr2));

/* 
Q5. Count Occurrences of a Number
Given an array arr = [2, 4, 2, 6, 2, 8] and a number x = 2, count how many times x appears in the array.
*/

/* 
Steps to Solve:
1. I will define a function name CountOccurrences and pass 2 parameters arr and target in it.
2. Then I will set the count value to 0 at starting.
3. Then I will iterate all items of array one by one using for loop.
4. Then I will write a condition which compare the number with target number.
5. If current number is equal to target number count will increment.
6.At last we return the count and call the function and console the result.
*/

function CountOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
let countarr = [3, 5, 3, 2, 3, 1];
let target = 3;
console.log("Q5: CountOccurences ===>", CountOccurrences(countarr, target));

/* 
Q- Find maximum number 
Given array[3,2,17,6,4]
*/

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxarr = [3, 2, 17, 6, 4];
console.log("MaxArr===>", findMax(maxarr));

/* 
Q3. Find the Smallest Element
Given an array arr = [8, 3, 6, 1, 9], find the smallest number without using any built-in methods.
*/

/* 
Steps to Solve:
1. First I will define a function named findmin 
2. In this I will pass a parameter arr in it.
3. Then I will access my given array items one by one using for loop.
4. Then I will write an  if condition.
5. Then I will return min number from the given array.
6. At last I will call my function .
*/

function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let minarr = [8, 3, 6, 1, 9];
console.log("Q3: Minimum Array===>", findMin(minarr));

/* 
q1 ->1 - Multiply all elements by 2. arr = [ 2,3,4,5]
output result = [4,6,8,10]
*/

/* 
/* 
Steps to Solve the problem;
1. First I will take a function name multiply.
2.Then I will take a empty array name result.
3. Then i will define my given variable inside a function with name arr.
4. I will iterate all items of array one by one using for loop.
5. Then I will push my result into empty array after multiplying my array with 2.
6. At last I will call my function

*/

function multiply() {
  const arr = [2, 3, 4, 5];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  console.log("Q1: Multiply Result====>", result);
}
multiply();
