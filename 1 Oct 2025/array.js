/* 
q1 - Find the highest number from array.
arr = [1,25,3,5,]

q2 - Reverse array using for loop.
arr = [4,6,7,1]

q3 - Find the odd numbers from this array.
arr = [2,3,4,5,6]

q4 - Print the below conditions :-
1 - if Number is less than 80 and greater than 50, print -> Hello
2 - if Number is less than 50 and greater than 30, print -> Hi
3 - if Number is less than 30 , print -> Bye

arr = [20, 40, 50, 60 ]

*/

/* 

q4 - Print the below conditions :-
1 - if Number is less than 80 and greater than 50, print -> Hello
2 - if Number is less than 50 and greater than 30, print -> Hi
3 - if Number is less than 30 , print -> Bye

arr = [20, 40, 50, 60 ]


*/

/* 
Steps to Solve the problem
1. I will define a function name condition.
2. I will define my given array with a variable name arr.
3. I will use for loop to check the  1st condition and print the result.
4. Same again I will use for loop to check the condition for 2nd given condition and print the result.
5. Again I will check the 3rd given condition for 3rd condition and print the result.
*/

function condition() {
  let arr = [20, 40, 50, 60];
  for (let i = 0; i < arr.length; i++) {
    if (i > 80 && i < 50);
  }
  console.log("Hello");

  for (let i = 0; i < arr.length; i++) {
    if (i > 50 && i < 30);
  }
  console.log("Hi");

  for (let i = 0; i < arr.length; i++) {
    if (i > 30);
  }
  console.log("Bye");
}

condition();

/* 

q3 - Find the odd numbers from this array.
arr = [2,3,4,5,6]


*/

/* 
Steps to Solve the problem.
1. I will define a function whose name is odd.
2. After this i will take my given array.
3. After this I will take an empty array to whose name is result to store my output.
4.After this I will iterate over my given array by using for loop to access all its elements.
5.Then I will check my condition if i % 2 !== 0; then i will push that number into empty array.
6. After that i will console the result .
7. At last I will call my function.


*/

function odd() {
  let arr1 = [2, 3, 4, 5, 6];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 !== 0) {
      result.push(arr1[i]);
    }
  }
  console.log("Oddnumbers===>", result);
}
odd();

/* 
q1 - Find the highest number from array.
arr = [1,25,3,5,]
*/

/* 
Steps to Solve:
1.I will define a function named it max.
2. then I will defined my given array with variable  name arr3.
3. then i will take another variable largeNum and set it to infinity.
4. then i will access my all elements of the given array one by one using for loop.
5. After this i will set a condition if arr3[i] > largeNum.
6. If the loop finds the largest number in the array it will store it in the variable large num.
7. At last I will call my function.

*/

function max() {
  let arr3 = [1, 25, 3, 5];
  let largeNum = -Infinity;

  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > largeNum) {
      largeNum = arr3[i];
    }
  }
  console.log("Highest Number===>", largeNum);
}
max();

/* 

q2 - Reverse array using for loop.
arr = [4,6,7,1]


*/

function reversearray() {
  let arr4 = [4, 6, 7, 1];
  const result = [];
  for (let i = 0; i < arr4.length; i--) {
    result.push(arr4[i]);
  }
  console.log(result);
}
reversearray();
