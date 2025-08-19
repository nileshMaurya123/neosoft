// Q1. What is an array in JavaScript?

// Answer 1 :

/*

 In JavaScript, an array is a special type of object used to store multiple values in a single variable. 
 It can hold different data types (numbers, strings, objects, even other arrays).

Example :  let a = [1, 2, 3, 4, 5, 6, 7];

 */

// Q2. How do you create an array in Javascript?

// Answer 2.

/*

In Javascript you can create an array using square brackets []

Example: let fruits = ['Apple', 'Banana', 'Mango', 'Orange']
*/

// Q3. How do you access the first element of an array?

// Answer 3.

/*

To access the first element of an array in JavaScript, use index 0

Example : let b = [1,2,3,4,5,6,7,8];
let firstindex = b[0];
console.log(firstindex);
*/

// Q4. How do you access the last element of an array?

// Answer 4.

/*
To access the last element of an array in JavaScript, you can use the array's length property

Method : Using array.length - 1

let fruits = ["apple", "banana", "cherry"];

let lastFruit = fruits[fruits.length - 1];

*/

// Q5. How do you find the length of an array?

// Answer 5.

/*
By using .length property we are able to find length of an array


let cars = ["BMW", "Mercedes", "Toyota"];
let length = cars.length;

*/

// Q6. How do you add an element to the end of an array?

// Answer 6.

/*

By using .push() method we can add element to the end of an array.
*/

/*

example :  let cars = ["BMW", "Mercedes", "Toyota"];
cars.push('Herculeus')
console.log(cars);
*/

// Q7. How do you add an element to the beginning of an array?

// Answer 7:

/*

let arr = [2, 3, 4];
arr.unshift(1);  // Adds 1 to the beginning
console.log(arr);


*/

// Q8. How do you remove the last element from an array?

// Answer 8:

/*
let arr = [1, 2, 3, 4];
arr.pop(); 
console.log(arr);
*/

// Q9. How do you remove the first element from an array?

// Answer 9:

/*
let arr = [1, 2, 3, 4];
arr.shift();  
console.log(arr); 
*/

// Q10. How do you check if a variable is an array?

// Answer 10:

/*
let myVar = [1, 2, 3];
console.log(Array.isArray(myVar));
*/

// Q11.  How do you loop through an array in JavaScript?

// Answer 11:

/*
By using for loop  we can loop through array in javascript.

/*

let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/

// Q12. How do you convert an array to a string?

// Answer 12:

/*
let arr = [1, 2, 3];
let str = arr.toString();
console.log(str);
*/

// Q13. How do you join all elements of an array into a string?

// Answer 13:

/*

let arr = ['Hello', 'world', '!'];
let result = arr.join(' ');  
console.log(result);

*/

// Q14. How do you find the index of an element in an array?

// Answer 14:

/*

let arr = ['a', 'b', 'c'];
let index = arr.indexOf('b');
console.log(index);  
*/

// Q15. How do you check if an array contains a specific element?

// Answer 15:

/*

let arr = [1, 2, 3];
console.log(arr.includes(2));  
console.log(arr.includes(5));  

// It checks true or false.
*/

// Q16. How do you reverse the elements of an array?

/*

let arr = [1, 2, 3];
arr.reverse();
console.log(arr);  
*/

// Q17. How do you sort an array of numbers?

// Answer 17:

/*

let arr = [3, 1, 2];
arr.sort();
console.log(arr);

*/

// Q18. How do you sort an array of strings?

// Answer 18:

/*

strings = ["banana", "apple", "cherry"]
strings.sort()
console.log(strings);

*/

// Q19. How do you merge two arrays?

// Answer 19: By using concat() we merge two arrays.

/*

Example:  
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Using concat
let merged = arr1.concat(arr2);

*/

// Q20. How do you copy an array?

// Answer 20: By using spread operator(...) we can copy an array.

/*

Example:
 const originalArray = [1, 2, { a: 3 }];
 const copiedArray = [...originalArray];

 console.log(copiedArray);

 */

// Q21. How do you get a part of an array?

// Answer 21: By using slice() method.

/*
let arr = [1, 2, 3, 4, 5];
let part = arr.slice(1, 4);
*/

// Q22.  What is the difference between slice() and splice()?

/* Answer 22:
 
 slice : Extracts a portion of an array without modifying the original array.

let arr = [1, 2, 3, 4, 5];

let slicedArr = arr.slice(1, 4); // [2, 3, 4]

console.log(arr); // [1, 2, 3, 4, 5] 
console.log(slicedArr); // [2, 3, 4]



splice : Modifies the original array by removing, adding, or replacing elements.

let arr = [1, 2, 3, 4, 5];

let removed = arr.splice(1, 2);  // Removes 2 elements starting from index 1

console.log(arr);  // 
console.log(removed);  // 

*/

// Q23. How do you remove elements from an array using splice()?

// Syntax:   array.splice(startIndex, deleteCount);

/*

let arr = [1, 2, 3, 4, 5];

arr.splice(2, 2);  

console.log(arr)

*/

// Q24.  How do you replace elements in an array using splice()?

/*

let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'x', 'y');
console.log(arr)

*/

// Q25. How do you add elements in an array using splice()?

/*
let fruits = ['apple', 'banana', 'mango'];

// Add 'orange' and 'grape' at index 1 (before 'banana')
fruits.splice(1, 0, 'orange', 'grape');

console.log(fruits);

*/
