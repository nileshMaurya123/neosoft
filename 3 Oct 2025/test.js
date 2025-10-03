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

q1 ->1 - Multiply all elements by 2. arr = [ 2,3,4,5]
output result = [4,6,8,10]

*/

/* 
Steps to Solve the problem;
1. First I will take a function name multiply.
2.Then I will take a empty array name result.
3. Then i will define my given variable inside a function with name arr.
4. I will iterate all items of array one by one using for loop.
5. Then I will push my result into empty array.
6. At last I will call my function

*/
function multiply() {
  const arr = [2, 3, 4, 5];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  console.log("Q1:Result:", result);
}
multiply();

/* 

q2 -> 2 - Print this pattern in console , n = 3

* *
*
*

*/
/*
function print() {
  let i = 0;
  let n = 3;
  let arr = [];
  let resultss = [];
  for (let i = 0; i < arr.length; i++);
  if (i * n === "*");
  {
    resultss.push("*");
  }
  console.log("Q2", resultss);
}
//print();
*/

/*
Q4. Reverse the Array
Given an array arr = [1, 2, 3, 4, 5], reverse the array manually (don’t use .reverse() method).
*/

/*
Q3. Find the Smallest Element
Given an array arr = [8, 3, 6, 1, 9], find the smallest number without using any built-in methods.
*/

/*
Q5. Count Occurrences of a Number
Given an array arr = [2, 4, 2, 6, 2, 8] and a number x = 2, count how many times x appears in the array.
*/

/* 
Steps to Solve 

1.First I will define a function.
2.then I will set the value of count to 0;
3. then i will iterate all items of array by using for loop.
4.then i wil set the condition  i === 2;
5.



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
const arr2 = [2, 4, 2, 6, 2, 8];
const target2 = 2;
console.log("Q5:", CountOccurrences(arr2, target2));

/* 

Q3. Find the Smallest Element
Given an array arr = [8, 3, 6, 1, 9], find the smallest number without using any built-in methods.


*/

/*
Q4. Reverse the Array
Given an array arr = [1, 2, 3, 4, 5], reverse the array manually (don’t use .reverse() method).
*/
function reversearray() {
  for (let i = 0; i < arr.length; i++);
  for (let j = 1; j < arr.length; j--);
  let(arr[i++] === arr[j--]);
}
