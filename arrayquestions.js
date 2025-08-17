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
