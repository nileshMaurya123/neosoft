/* 

Q15. Seal an object and demonstrate you can modify existing values but cannot add/remove keys.
Given: const state = { step: 1 }
Goal: Change step to 2, but adding 'done' should fail

*/

// Original state object
const state = { step: 1 };

// Seal the object
Object.seal(state);

// Modify an existing property (allowed)
state.step = 2;
console.log(state.step);

// Try to add a new property (this should fail)
state.done = true;
console.log(state.done);

// Check the object to see if the new property was added (it shouldn't be)
console.log(state);

/*

Q18. Find the key with the maximum numeric value. 
Given: const votes = { A: 12, B: 19, C: 7 }
Goal: Return 'B'

*/

const votes = { A: 12, B: 19, C: 7 };

let maxKey = null;
let maxValue = -Infinity;

for (const key in votes) {
  if (votes[key] > maxValue) {
    maxValue = votes[key];
    maxKey = key;
  }
}

console.log(maxKey);

/* 
Q21. Omit a set of keys from an object.
Given: const user = { id: 3, name: 'Raj', email: 'r@x.com', role: 'dev' }, omit = ['email'] 
Goal: Return { id: 3, name: 'Raj', role: 'dev' }

*/

const user = { id: 3, name: "Raj", email: "r@x.com", role: "dev" };

// Destructuring to omit the 'email' property and store the rest in 'newObject'
const { email, ...newObject } = user;

console.log(newObject);

/* 
Q22. Invert keys and values (assume values are unique strings/numbers). 
Given: const colors = { red: '#f00', green: '#0f0' } 
Goal: Return { '#f00': 'red', '#0f0': 'green' }

*/

const colors = { red: "#f00", green: "#0f0" };

// Invert keys and values
const inverted = Object.fromEntries(
  Object.entries(colors).map(([key, value]) => [value, key])
);

console.log(inverted);

/*
Q-27. Convert an object to a query string 'a=1&b;=2' (encode keys/values).
Given: const params = { a: 1, b: 'hi' } 
Goal: Return 'a=1&b;=hi'
*/

const params = { a: 1, b: "hi" };
const queryString = new URLSearchParams(params).toString();
console.log(queryString);

/* 

Q44. Define a class and instantiate it into an object.
Given: class User { constructor(id, name){ this.id=id; this.name=name; } }
Goal: new User(1, 'Sam') → { id:1, name:'Sam' }

*/

// Define the class
class User {
  constructor(id, name) {
    this.id = id; // Initialize the 'id' property
    this.name = name; // Initialize the 'name' property
  }
}

// Instantiate the class into an object
const user1 = new User(1, "Sam");

// Output the instantiated object
console.log(user1);

/* 

Q49. Replace keys using a mapping object (rename multiple keys).
Given: user = { fn: 'Asha', ln: 'Sharma' }, map = { fn: 'firstName', ln: 'lastName' } 
Goal: Return { firstName: 'Asha', lastName: 'Sharma' }

*/

const user2 = { fn: "Asha", ln: "Sharma" };
const map = { fn: "firstName", ln: "lastName" };

const renamedUser = Object.keys(user2).reduce((acc, key) => {
  acc[map[key]] = user2[key];
  return acc;
}, {});

console.log(renamedUser);
