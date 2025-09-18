/*
Q24. Find an object in an array by id and return it. 
Given: items = [{id:1, name:'A'}, {id:2, name:'B'}], id = 2
Goal: Return {id:2, name:'B'}
*/

const items2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const id2 = 2;

const item = items2.find((item) => item.id === id2);

console.log(item);

/* 
Q26. Remove an object from an array by id (immutably). 
Given: items = [{id:1}, {id:2}, {id:3}], id = 2
Goal: Return [{id:1}, {id:3}]
*/

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

const id = 2;

const updatedItems = items.filter((item) => item.id !== id);

console.log(updatedItems);

/* 
Q28. Parse a query string into an object (simple pairs, no arrays). 
Given: str = 'a=1&b;=hi'
Goal: Return { a: '1', b: 'hi' }
*/

const str = "a=1 & b=hi";

const params2 = new URLSearchParams(str);
const result = Object.fromEntries(params2.entries());

console.log(result);

/*

Q40. Stringify an object to JSON and parse it back (round-trip). 
Given: obj = { x: 1, y: [2,3] }
Goal: Return same structure after parse

*/

const obj = { x: 1, y: [2, 3] };

// Step 1: Stringify the object to JSON
const jsonString = JSON.stringify(obj);

// Step 2: Parse the JSON string back to an object
const parsedObj = JSON.parse(jsonString);

console.log(parsedObj);

/* 
Q42. Create an object with a prototype and a method; then create a child object using Object.create(). 
Given: proto = { greet(){ return 'hi'; } }
Goal: child.greet() returns 'hi'
*/

// Define the prototype object with a method
const proto = {
  greet() {
    return "hi";
  },
};

// Create a child object using Object.create() with proto as its prototype
const child = Object.create(proto);

// Call the greet method on the child object
console.log(child.greet());

/* 
Q43. Check prototype chain relation using isPrototypeOf.
Given: parent = {}, child = Object.create(parent) 
Goal: Return true for parent.isPrototypeOf(child)
*/

const parent = {}; // Parent object
const child2 = Object.create(parent); // Create child with parent as its prototype

// Check if parent is in the prototype chain of child
console.log(parent.isPrototypeOf(child2));

/*

Q45. Build a frequency object (histogram) from an array of strings.
Given: arr = ['x','y','x','z'] 
Goal: Return { x: 2, y: 1, z: 1 }

*/

const arr = ["x", "y", "x", "z"];

// Initialize an empty object to store the frequency
const frequency = {};

// Loop through the array and count the occurrences
arr.forEach((item) => {
  frequency[item] = (frequency[item] || 0) + 1;
});

console.log(frequency);
