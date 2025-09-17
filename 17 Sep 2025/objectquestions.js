/*
Q5. Check if a property exists using both in operator and hasOwnProperty.
Given: const config = { darkMode: true }
Goal: Return true for 'darkMode' and false for 'lang'

*/

// Using in operator:

const config = { darkMode: true };

console.log("darkMode" in config);
console.log("lang" in config);

// Using hasOwnProperty():

const config2 = { darkMode: true };

console.log(config2.hasOwnProperty("darkMode"));
console.log(config2.hasOwnProperty("lang"));

/*
Q14. Freeze an object and demonstrate that updates do not apply. 
Given: const state = { status: 'OPEN' }
Goal: After freezing, attempts to change status are ignored (or throw in strict mode)
*/

const state = { status: "OPEN" };
// Freeze the object
Object.freeze(state);

// Attempt to update property
state.status = "CLOSED";

console.log(state.status);

/*
Q20. Pick a subset of keys into a new object.
Given: const user = { id: 3, name: 'Raj', email: 'r@x.com', role: 'dev' }, keys = ['id', 'email']
Goal: Return { id: 3, email: 'r@x.com' }
*/

const user = { id: 3, name: "Raj", email: "r@x.com", role: "dev" };
const { id, email } = user;
const newObject = { id, email };

console.log(newObject);

/*

Q35. Convert an array of [key, value] pairs into an object (like Object.fromEntries).
Given: pairs = [['id', 7], ['name', 'Neo']] 
Goal: Return { id: 7, name: 'Neo' }

*/

const keyValuePair = [
  ["id", "7"],
  ["name", "Neo"],
];

const result = Object.fromEntries(keyValuePair);
console.log(result);

/* 
Q36. Convert an object to a Map and back to an object. 
Given: obj = { a: 1, b: 2 }
Goal: Create Map([['a',1],['b',2]]) then back to { a: 1, b: 2 }
*/

// Given object
const obj4 = { a: 1, b: 2 };

// 1. Convert object to Map
const map = new Map(Object.entries(obj4));
console.log(map);

// 2. Convert Map back to object
const newObj = Object.fromEntries(map);
console.log(newObj);

/* 
Q47. Compute cart total from an array of item objects (sum price * qty).
Given: cart = [{ price: 50, qty: 2 }, { price: 30, qty: 1 }] 
Goal: Return 130
*/

const cart = [
  { price: 50, qty: 2 },
  { price: 30, qty: 1 },
];

// Compute the total cart value
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

console.log(total);
