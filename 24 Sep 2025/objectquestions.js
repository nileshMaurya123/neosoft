/*
Q13. Create a deep clone of a plain-data object using JSON methods (no functions, no Dates).
Given: const src = { a: 1, b: { c: 2 } } 
Goal: Clone so that src.b !== clone.b
*/

const src2 = { a: 1, b: { c: 2 } };
const clone2 = JSON.parse(JSON.stringify(src2));
console.log(src2.b !== clone2.b);

/*

Q14. Freeze an object and demonstrate that updates do not apply. 
Given: const state = { status: 'OPEN' }
Goal: After freezing, attempts to change status are ignored (or throw in strict mode)
*/

const state = { status: "OPEN" };
Object.freeze(state);
state.status = "CLOSED";
console.log(state);

/* 
Q15. Seal an object and demonstrate you can modify existing values but cannot add/remove keys.
Given: const state = { step: 1 }
Goal: Change step to 2, but adding 'done' should fail

*/
const states = { step: 1 };
Object.seal(states);

states.step = 2;
states.done = true;
console.log(states);

/* 
Q16. Count how many properties an object has. 
Given: const user = { id: 5, name: 'Lee', active: true }
Goal: Return 3

*/

const user3 = { id: 5, name: "Lee", active: true };
console.log(Object.keys(user3).length);

/* 
Q17. Sum numeric property values in an object.
Given: const salaries = { a: 1200, b: 800, c: 600 } 
Goal: Return 2600

*/

const salaries = { a: 1200, b: 800, c: 600 };

// Sum the numeric property values
const totalSalary = Object.values(salaries).reduce(
  (sum, value) => sum + value,
  0
);

console.log(totalSalary);

/* 
Q19. Rename a key in an object (create new object with 'fname' → 'firstName').
Given: const user = { id: 1, fname: 'Aditi', city: 'Pune' } 
Goal: Return { id: 1, firstName: 'Aditi', city: 'Pune' }

*/

const user4 = { id: 1, fname: "Aditi", city: "Pune" };
const newUser = { ...user4, firstname: user4.fname };
delete newUser.fname;
console.log(newUser);

/* 
Q22. Invert keys and values (assume values are unique strings/numbers). 
Given: const colors = { red: '#f00', green: '#0f0' }
Goal: Return { '#f00': 'red', '#0f0': 'green' }

*/

const colors = {
  "#f00": "red",
  "#0f0": "green",
};

const reversedObject = Object.fromEntries(
  Object.entries(colors).map(([key, value]) => [value, key])
);

console.log(reversedObject);

/*
Q35. Convert an array of [key, value] pairs into an object (like Object.fromEntries).
Given: pairs = [['id', 7], ['name', 'Neo']] 
Goal: Return { id: 7, name: 'Neo' }


*/
const pairs = [
  ["id", 7],
  ["name", "Neo"],
];
const obj = Object.fromEntries(pairs);
console.log(obj);

/* 
 Q36. Convert an object to a Map and back to an object. 
 Given: obj = { a: 1, b: 2 }
Goal: Create Map([['a',1],['b',2]]) then back to { a: 1, b: 2 }
 
 */

const obj5 = { a: 1, b: 2 };

const map = Object.entries(obj5);
console.log(map);
const backobj = Object.fromEntries(map);
console.log(backobj);
