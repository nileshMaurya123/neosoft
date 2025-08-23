/* 
Q-26. How do you use 'this' keyword in an object method?

*/
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

/*
Q-27. How do you create a nested object?

*/

const person2 = {
  firstName: "John",
  lastName: "Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  address: {
    city: "New York",
    zip: "10001",
  },
};

console.log(person2.contact.email);
console.log(person2.address.city);

/* 
Q-28. How do you access properties of a nested object?
Ans-28 By usind dot(.) notation.
*/

const person3 = {
  firstName: "John",
  lastName: "Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  address: {
    city: "New York",
    zip: "10001",
  },
};

console.log(person3.contact.email);
console.log(person3.address.city);

/*
Q-29. How do you safely access nested properties?
Ans- 29. Optional Chaining (?.)
*/

const person4 = {
  name: "Gracy",
  contact: {
    email: "alice@example.com",
  },
};

console.log(person4.contact?.email);
console.log(person4.address?.city);

/* 
Q-30. What is optional chaining in JavaScript?
*/

const user = {
  name: "Doe",
  address: {
    city: "New York",
  },
};

console.log(user.address?.city);
console.log(user.contact?.email);

/* 
Q-31.  What is the difference between null and undefined in objects?

Ans-31. | Feature              | `undefined`                                                          | `null`                                                               |
| -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Meaning**          | The property or variable **has not been assigned** a value           | The property or variable has been **explicitly assigned "no value"** |
| **Default?**         | Yes — variables or object properties are `undefined` if not assigned | No — must be set manually                                            |
| **Property exists?** | Might **not exist** at all                                           | **Does exist**, just holds `null`                                    |
| **Type**             | `undefined`                                                          | `object` (due to historical bug in JavaScript)                       |

*/

/* Q-32. How do you check if an object is empty? 
Ans-32.
*/

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}

/* Q-33. How do you destructure an object?
Ans-33. */

const person5 = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 30,
};

const { firstName, lastName } = person5;

console.log(firstName);
console.log(lastName);

/* Q-34. How do you set default values in object destructuring?
Ans-34. */
const user2 = {
  name: "John",
  // no age provided
};

const { name, age = 30 } = user;

console.log(name);
console.log(age);

/* Q-35. . How do you rename variables in object destructuring?
Ans 35.
Syntax : const { property = defaultValue } = object;
*/

const user3 = {
  name: "Alice",
  // no age provided
};

const { name2, age2 = 30 } = user;

console.log(name2);
console.log(age2);

/* Q-36. How do you use rest operator in object destructuring?

Syntax: const { extractedKey, ...restObject } = originalObject;
*/
const user4 = {
  name: "Mike",
  age: 30,
  email: "mike@example.com",
};

const { name3, ...rest } = user;

console.log(name3);
console.log(rest);

/* 
Q-37. How do you clone an object using spread operator?

Syntax: const clone = { ...original };
*/

const original = {
  name: "Alice",
  age: 25,
};

const clone = { ...original };

console.log(clone);
console.log(clone === original);

/* Q-38. How do you compare two objects for equality? */

const original1 = {
  name: "Alice",
  age: 25,
};

const clone1 = { ...original };

console.log(clone1);
console.log(clone1 === original1);

/* Q-39. How do you stringify an object?
Syntax: const clone = {... original}
*/

const original2 = {
  name: "Alice",
  age: 25,
};

const clone2 = { ...original };

console.log(clone2);
console.log(clone2 === original2);

/* Q-40. How do you parse a JSON string into an object? 
const obj = JSON.parse(jsonString);
*/

const jsonStr = '{"name":"Alice","age":25}';

const user5 = JSON.parse(jsonStr);

console.log(user5.name);
console.log(user5.age);

/*  Q-41. How do you deep clone an object? */

const original3 = {
  name: "Alice",
  address: {
    city: "New York",
  },
  hobbies: ["reading", "gaming"],
};

const clone3 = structuredClone(original3);

clone3.address.city = "Paris";
console.log(original3.address.city);

/* 
Q- 42. What are getters and setters in objects?
*/

// Getter(get)

const person6 = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person6.fullName);

// Setter(set)

const person7 = {
  firstName: "John",
  lastName: "Doe",

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person7.fullName = "Alice Smith";
console.log(person7.firstName);
console.log(person7.lastName);

/* 
Q-43. How do you define getters and setters in an object?
 */

const obj1 = {
  _property: 42, // ✅ set an actual value

  // Getter
  get property() {
    return this._property;
  },

  // Setter
  set property(value) {
    this._property = value;
  },
};

console.log(obj1.property); // 42
obj1.property = 100;
console.log(obj1.property); // 100

/* Q-44. What is the difference between in operator and hasOwnProperty()? */
/* 
1. in Operator

Checks if the property exists anywhere in the object's prototype chain (including inherited properties).

2. hasOwnProperty() Method

Checks if the property is a direct property of the object (not inherited).


*/

/* Q-45.  What is prototype in JavaScript objects? */

/* In JavaScript, a prototype is an object that other objects inherit properties and methods from. 
It's a core part of JavaScript's inheritance system, known as prototype-based inheritance. */

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(`My father is ${myFather.age}. My mother is ${myMother.age}.`);

/* 
Q-46.  How do you create an object with a prototype?

A-46. By using Object.create() 
*/

const animal = {
  speak() {
    console.log("Animal speaks");
  },
};

const dog = Object.create(animal);
dog.name = "Buddy";

dog.speak();
console.log(dog.name);
console.log(Object.getPrototypeOf(dog) === animal);

/* 
Q-47.  How do you check the prototype of an object?
A-47. By using Object.getPrototypeOf(obj) we check the prototype of object.

*/

const animals = {
  speak() {
    console.log("Animal speaks");
  },
};

const dogs = Object.create(animals);

console.log(Object.getPrototypeOf(dogs) === animals);
console.log(dogs.__proto__ === animals);

/* 
Q-48. What is Object.create()?

Ans-48. Object.create() in JavaScript

Object.create() is a method used to create a new object and explicitly set its prototype to another object.

*/

/* 
Q-49. What is Object.assign()?
Ans-49. Object.assign() in JavaScript

Object.assign() is a method used to copy properties from one or more source objects to a target object
*/

const target = { a: 1 };
const source = { b: 2, c: 3 };

const result = Object.assign(target, source);

console.log(result);
console.log(target);

/* 
Q-50. What are symbols in JavaScript objects? 

Ans-50. Symbol is a primitive data type used to create unique and immutable keys for object properties.

Syntax : const mySymbol = Symbol("description");
*/

const id = Symbol("id");

const users = {
  name: "Alice",
  [id]: 12345,
};

console.log(users.name);
console.log(users[id]);
