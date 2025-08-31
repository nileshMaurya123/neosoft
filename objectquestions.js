/* 
Q1. What is an object in JavaScript?
Ans-1: In JavaScript, an object is a collection of key-value pairs, where each key is a string (or symbol) 
and each value can be any valid JavaScript data type (string, number, array, function, etc.).

for example :  let person = {
  name: "John",
  age: 30,
  isStudent: false
};
*/

/*
Q2. How do you create an object in JavaScript?
Ans-2. By creating key-value pairs within curly braces {}, we can create an object in js.

for example: let obj = {
  key1: value1,
  key2: value2,
  key3: value3
};
*/

/* 
Q3. How do you access property of an object?
*/

//Ans-3: In two ways we can access property of an object.

//1. By dot notation(.)

let person1 = {
  name: "Alice",
  age: 25,
  city: "London",
};

console.log(person1.name);
console.log(person1.age);

//2. By bracket notation([])

let obj = {
  "full name": "Bob Smith",
  "user-id": "xyz123",
};

console.log(obj["full name"]);
console.log(obj["user-id"]);

/*
Q4. How do you add a new property to an object?
*/

let person2 = {
  name: "John",
  age: 30,
};

person2.city = "New York";

console.log(person2);

/*
Q5. How do you delete a property from an object?
*/

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

delete person.city;

console.log(person);

/* 
Q6.  How do you check if a property exists in an object?
*/

let person3 = {
  name: "John",
  age: 30,
};

console.log("name" in person3);
console.log("city" in person3);

/* 
Q-7. How do you loop through the properties of an object?
*/

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

/* 

Q-8. What is the difference between dot notation and bracket notation?

Ans -8 The main difference between dot notation and bracket notation is how they handle property names:

Dot Notation: Works only with valid identifiers (property names that follow JavaScript variable naming rules).

Bracket Notation: Allows you to use dynamic property names (i.e., variables or expressions) 
and access properties with special characters or spaces.

*/

/* 
Q-9. How do you get all keys of an object?

Ans-9 To get all the keys (property names) of an object in JavaScript, you can use the Object.keys() method.
*/
let person4 = {
  name: "John",
  age: 30,
  city: "New York",
};

let keys = Object.keys(person4);
console.log(keys);

/* 
Q-10: How do you get all values of an object?

Ans-10 : To get all the values of an object in JavaScript, you can use the Object.values() method.
*/

let person5 = {
  name: "John",
  age: 30,
  city: "New York",
};

let values = Object.values(person5);
console.log(values);

/* 
Q-11.  How do you get both keys and values of an object?
A-11. To get both keys and values of an object in JavaScript, you can use the Object.entries() method.
*/

let person6 = {
  name: "John",
  age: 30,
  city: "New York",
};

let entries = Object.entries(person6);
console.log(entries);

/* 
Q-12.  How do you copy an object in JavaScript?
A-12: Using the spread operator (...)
*/

const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);

/* 
Q-13. What is the difference between shallow copy and deep copy?
A-13:
1. Shallow Copy:  The pointer points the same copy of objects of class.
2. Deep Copy: It creates copy of each object inside of the class.

*/

/*
Q-14. How do you merge two objects?
A-14. By using spread operator(...)

*/

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged);

/* Q-15. What is the difference between Object.keys() and Object.values()?
 */
// Ans-15. Object.keys(obj)

const obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj3));

// Object.values(obj)
const obj4 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj4));

/*
Q-16. How do you convert an object to an array?

*/

// Ans-16. By using Object.values property we can convert object to an array.

const obj5 = { a: 1, b: 2, c: 3 };
const values1 = Object.values(obj5);
console.log(values1);

/* 

Q-17.  How do you convert an array to an object?
*/

// A-17. Array of Pairs → Object

const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj6 = Object.fromEntries(arr);
console.log(obj6);

/* Q-18.  What is Object.entries()? */

// Synatx: Object.entries(obj)

const obj7 = { a: 1, b: 2, c: 3 };

const entries2 = Object.entries(obj7);
console.log(entries2);

/* Q-19.   How do you freeze an object?
 Syntax: Object.freeze(obj);
*/

const myperson2 = {
  name: "Alice",
  age: 30,
};

Object.freeze(myperson2);

myperson2.age = 40;
myperson2.city = "Paris";
delete myperson2.name;

console.log(myperson2);

/* Q-20. How do you seal an object? 
Syntax: Object.seal(obj);
*/

const user = {
  name: "Amanda",
  age: 30,
};

Object.seal(user);

// Modifying existing property — works
user.age = 31;

// Adding a new property — fails silently in non-strict mode
user.email = "alice@example.com";

// Deleting a property — fails silently
delete user.name;

console.log(user);

/* Q-21. What is the difference between freeze() and seal()?
Ans-21. 
        Object.seal() : Modifying existing properties.
        Object.freeze(): This method freezes an object.
         */

// Object.freeze() example:
const frozenObj = {
  name: "Alice",
  age: 30,
};
// Not allowed: modifying existing property
Object.freeze(frozenObj);

frozenObj.name = "Bob";

// Not allowed: adding new property
frozenObj.email = "alice@example.com";

// Not allowed: deleting a property
delete frozenObj.age;

console.log(frozenObj);

// Object.seal() example:
const sealedObj = {
  name: "Alice",
  age: 30,
};

Object.seal(sealedObj);

// Allowed: modifying existing property
sealedObj.name = "Bob";

// Not allowed: adding new property
sealedObj.email = "alice@example.com";

// Not allowed: deleting a property
delete sealedObj.age;

console.log(sealedObj);

/*
Q-22. How do you check if an object is frozen?

Syntax: Object.isFrozen(obj)
*/

const user2 = {
  name: "Alice",
};

Object.freeze(user2);

console.log(Object.isFrozen(user2));

/* 
Q-23. How do you check if an object is sealed?

Syntax: Object.isSealed(obj)
*/

const obj8 = { a: 1 };
console.log(Object.isSealed(obj8));

Object.seal(obj8);

console.log(Object.isSealed(obj8));

/* 
Q-24. How do you make all properties of an object read-only?
Ans-24. Object.freeze(obj) method is used to make all properties of an object read-only.
*/

// Q-25. How do you define a method inside an object?

//Ans-25.

const obj9 = {
  greet: function () {
    console.log("Hello World");
  },
};

obj9.greet();
