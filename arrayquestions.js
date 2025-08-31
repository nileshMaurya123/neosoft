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

// To access the first element of an array in JavaScript, use index 0

// Example :

let b = [1, 2, 3, 4, 5, 6, 7, 8];
let firstindex = b[0];
console.log(firstindex);

// Q4. How do you access the last element of an array?

// Answer 4.

// To access the last element of an array in JavaScript, you can use the array's length property

// Method : Using array.length - 1

let fruits = ["apple", "banana", "cherry"];

let lastFruit = fruits[fruits.length - 1];

console.log(lastFruit);

// Q5. How do you find the length of an array?

// Answer 5.

// By using .length property we are able to find length of an array

let cars = ["BMW", "Mercedes", "Toyota"];
let length = cars.length;
console.log(length);

// Q6. How do you add an element to the end of an array?

// Answer 6.

/*

By using .push() method we can add element to the end of an array.
*/

//example :
let cars2 = ["BMW", "Mercedes", "Toyota"];

cars2.push("Herculeus");
console.log(cars2);

// Q7. How do you add an element to the beginning of an array?

// Answer 7:

let arr = [2, 3, 4];
arr.unshift(1); // Adds 1 to the beginning
console.log(arr);

// Q8. How do you remove the last element from an array?

// Answer 8:

let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2);

// Q9. How do you remove the first element from an array?

// Answer 9:

let arr3 = [1, 2, 3, 4];
arr.shift();
console.log(arr3);

// Q10. How do you check if a variable is an array?

// Answer 10:

let myVar = [1, 2, 3];
console.log(Array.isArray(myVar));

// Q11.  How do you loop through an array in JavaScript?

// Answer 11:

// By using for loop  we can loop through array in javascript.

let arr4 = [10, 20, 30];

for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

// Q12. How do you convert an array to a string?

// Answer 12:

let arr5 = [1, 2, 3];
let str = arr5.toString();
console.log(str);

// Q13. How do you join all elements of an array into a string?

// Answer 13:

let arr6 = ["Hello", "world", "!"];
let result = arr6.join(" ");
console.log(result);

// Q14. How do you find the index of an element in an array?

// Answer 14:

let arr7 = ["a", "b", "c"];
let index = arr7.indexOf("b");
console.log(index);

// Q15. How do you check if an array contains a specific element?

// Answer 15:

let arr8 = [1, 2, 3];
console.log(arr8.includes(2));
console.log(arr8.includes(5));

// It checks true or false.

// Q16. How do you reverse the elements of an array?

let arr9 = [1, 2, 3];
arr9.reverse();
console.log(arr9);

// Q17. How do you sort an array of numbers?

// Answer 17:

let arr10 = [3, 1, 2];
arr10.sort();
console.log(arr10);

// Q18. How do you sort an array of strings?

// Answer 18:

strings = ["banana", "apple", "cherry"];
strings.sort();
console.log(strings);

// Q19. How do you merge two arrays?

// Answer 19: By using concat() we merge two arrays.

// Example:
let oldarr = [1, 2, 3];
let newarr = [4, 5, 6];

// Using concat
let merge = oldarr.concat(newarr);
console.log(merge);

// Q20. How do you copy an array?

// Answer 20: By using spread operator(...) we can copy an array.

//Example:

const originalArray = [1, 2, { a: 3 }];
const copiedArray = [...originalArray];

console.log(copiedArray);

// Q21. How do you get a part of an array?

// Answer 21: By using slice() method.

let arr12 = [1, 2, 3, 4, 5];
let part = arr12.slice(1, 4);
console.log(part);

// Q22.  What is the difference between slice() and splice()?

// Answer 22:

// slice : Extracts a portion of an array without modifying the original array.

let arr13 = [1, 2, 3, 4, 5];

let slicedArr = arr13.slice(1, 4); // [2, 3, 4]

console.log(arr13); // [1, 2, 3, 4, 5]
console.log(slicedArr); // [2, 3, 4]

// splice : Modifies the original array by removing, adding, or replacing elements.

let arr14 = [1, 2, 3, 4, 5];

let removed = arr14.splice(1, 2); // Removes 2 elements starting from index 1

console.log(arr14); //
console.log(removed); //

// Q23. How do you remove elements from an array using splice()?

// Syntax:   array.splice(startIndex, deleteCount);

let arr15 = [1, 2, 3, 4, 5];

arr15.splice(2, 2);

console.log(arr15);

// Q24.  How do you replace elements in an array using splice()?

let arr16 = [1, 2, 3, 4];
arr16.splice(1, 2, "x", "y");
console.log(arr16);

// Q25. How do you add elements in an array using splice()?

let fruits2 = ["apple", "banana", "mango"];

// Add 'orange' and 'grape' at index 1 (before 'banana')
fruits2.splice(1, 0, "orange", "grape");

console.log(fruits2);
