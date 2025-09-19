/* 
Q13. Create a deep clone of a plain-data object using JSON methods (no functions, no Dates).
Given: const src = { a: 1, b: { c: 2 } } 
Goal: Clone so that src.b !== clone.b
*/

const src = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(src));
console.log(clone, src.b !== clone.b);

/* 
Q17. Sum numeric property values in an object.
Given: const salaries = { a: 1200, b: 800, c: 600 } 
Goal: Return 2600
*/

const salaries = { a: 1200, b: 800, c: 600 };
console.log(Object.values(salaries).reduce((a, b) => a + b, 0));

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
Q37. Remove properties with falsy values from an object.
Given: obj = { a: 0, b: 2, c: '', d: 'ok' } 
Goal: Return { b: 2, d: 'ok' }
*/

const obj1 = { a: 0, b: 2, c: "", d: "ok" };
console.log(Object.fromEntries(Object.entries(obj1).filter(([, v]) => v)));

/* 
Q38. Filter an object to keep only numeric values. 
Given: obj = { a: 1, b: '2', c: 3 }
Goal: Return { a: 1, c: 3 }
*/

const filterNumeric = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => typeof v === "number")
  );

const obj4 = { a: 1, b: "2", c: 3 };
console.log(filterNumeric(obj4));

/* 

Q39. Return a new object whose keys are sorted alphabetically (values preserved).
Given: obj = { b: 2, a: 1, c: 3 } 
Goal: Return { a: 1, b: 2, c: 3 }

*/

const obj3 = { b: 2, a: 1, c: 3 };
console.log(Object.fromEntries(Object.entries(obj3).sort()));
