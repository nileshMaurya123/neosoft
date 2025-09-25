/* 
Q13. Create a deep clone of a plain-data object using JSON methods (no functions, no Dates).
Given: const src = { a: 1, b: { c: 2 } } 
Goal: Clone so that src.b !== clone.b
*/

const src = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(src));
console.log(clone, src.b !== clone.b);

/* 
Q14. Freeze an object and demonstrate that updates do not apply. 
Given: const state = { status: 'OPEN' }
Goal: After freezing, attempts to change status are ignored (or throw in strict mode)
*/
const state14 = { status: "OPEN" };
Object.freeze(state14);
state14.status = "CLOSED";
console.log(state14.status);

/*
Q15. Seal an object and demonstrate you can modify existing values but cannot add/remove keys.
Given: const state = { step: 1 }
Goal: Change step to 2, but adding 'done' should fail 
*/

const state2 = { step: 1 };

// Seal the object
Object.seal(state2);

// Modify an existing property
state2.step = 2;

// Try to add a new property
state2.done = true;

// Try to delete a property
delete state2.step;

console.log(state2);

/* 
Q16. Count how many properties an object has. 
Given: const user = { id: 5, name: 'Lee', active: true }
Goal: Return 3
*/
const user16 = { id: 5, name: "Lee", active: true };
const count16 = Object.keys(user16).length;
console.log(count16);

/* 
Q17. Sum numeric property values in an object.
Given: const salaries = { a: 1200, b: 800, c: 600 } 
Goal: Return 2600
*/

const salaries = { a: 1200, b: 800, c: 600 };
console.log(Object.values(salaries).reduce((a, b) => a + b, 0));

/* 
Q19. Rename a key in an object (create new object with 'fname' → 'firstName').
Given: const user = { id: 1, fname: 'Aditi', city: 'Pune' } 
Goal: Return { id: 1, firstName: 'Aditi', city: 'Pune' }
*/

const user19 = { id: 1, fname: "Aditi", city: "Pune" };
const renamed19 = { ...user19, firstName: user19.fname };
delete renamed19.fname;
console.log(renamed19);

/* 

Q25. Update an object in an array by id (immutably return new array).
Given: items = [{id:1, qty:2}, {id:2, qty:5}], id = 1, newQty = 3 
Goal: Return [{id:1, qty:3}, {id:2, qty:5}]
*/

const items = [
  { id: 1, qty: 2 },
  { id: 2, qty: 5 },
];
console.log(items.map((i) => (i.id === 1 ? { ...i, qty: 3 } : i)));

/* 
Q26. Remove an object from an array by id (immutably). 
Given: items = [{id:1}, {id:2}, {id:3}], id = 2
Goal: Return [{id:1}, {id:3}]
*/
const items26 = [{ id: 1 }, { id: 2 }, { id: 3 }];
const id26 = 2;
const filtered26 = items26.filter((item) => item.id !== id26);
console.log(filtered26);
