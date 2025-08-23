/*
Q1. Access a property by key.
Given: const user = { name: 'Asha', age: 25, city: 'Pune' } 
Goal: Return 25 (the value of user.age)

*/

const user = { name: "Asha", age: 25, city: "Pune" };
console.log(user.age);

/* 

Q2. Add a new property to an object.
Given: const car = { brand: 'Tata', model: 'Nexon' }
Goal: Add year: 2023 to get { brand: 'Tata', model: 'Nexon', year: 2023 }

*/

const car = { brand: "Tata", model: "Nexon" };

car.year = 2023;

console.log(car);

/* 

Q3. Delete a property from an object.
Given: const product = { id: 10, name: 'Pen', price: 20, discount: 5 } 
Goal: Remove discount to get { id: 10, name: 'Pen', price: 20 }

*/
const product = { id: 10, name: "Pen", price: 20, discount: 5 };

delete product.discount;

console.log(product);

/*

Q4. Update an existing property's value.
Given: const profile = { username: 'ratna', followers: 120 }
Goal: Change followers to 125

*/

const profile = { username: "ratna", followers: 120 };
profile.followers = 125;

console.log(profile);

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

Q6. Get all keys of an object.
Given: const book = { title: 'JS Basics', pages: 180, author: 'RK' }
Goal: Return ['title', 'pages', 'author']
*/

const book = { title: "JS Basics", pages: 180, author: "RK" };
const keys = Object.keys(book);

console.log(keys);

/* 
Q7. Get all values of an object.
Given: const book = { title: 'JS Basics', pages: 180, author: 'RK' } 
Goal: Return ['JS Basics', 180, 'RK']
*/

const books = { title: "JS Basics", pages: 180, author: "RK" };
const values = Object.values(books);

console.log(values);

/* 
Q8. Get key–value pairs (entries).
Given: const settings = { sound: true, quality: 'HD' }
Goal: Return [['sound', true], ['quality', 'HD']]
*/

const settings = { sound: true, quality: "HD" };
const entries = Object.entries(settings);

console.log(entries);

/*Q9. 
Build an object from two arrays of equal length (keys and values).
Given: keys = ['id', 'name'], values = [101, 'Sam']
 Goal: Return { id: 101, name: 'Sam' } 
 */

const keys2 = ["id", "name"];
const values2 = [101, "Sam"];

const result = {};

for (let i = 0; i < keys2.length; i++) {
  result[keys2[i]] = values2[i];
}

console.log(result);

/* 
Q10. Merge two shallow objects (right overwrites left on conflicts). 
Given: obj1 = { a: 1, b: 2 }, obj2 = { b: 9, c: 3 }
Goal: Return { a: 1, b: 9, c: 3 }
*/

obj1 = { a: 1, b: 2 };
obj2 = { b: 9, c: 3 };
const merged = Object.assign({}, obj1, obj2);

console.log(merged);

/*

Q11. Deep merge two nested objects (merge inner objects rather than overwrite).
Given: a = { user: { name: 'A', city: 'Pune' } }, b = { user: { city: 'Mumbai', age: 30 } } 
Goal: Return { user: { name: 'A', city: 'Mumbai', age: 30 } }

*/

function deepMerge(target, source) {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const a = { user: { name: "A", city: "Pune" } };
const b = { user: { city: "Mumbai", age: 30 } };

const merged2 = deepMerge(JSON.parse(JSON.stringify(a)), b);

console.log(merged2);

/*
Q12. Create a shallow clone of an object (changes to clone should not affect original top-level fields). 
Given: const src = { x: 1, y: 2 }
Goal: Return a new object { x: 1, y: 2 }

*/

const src = { x: 1, y: 2 };
const clone = Object.assign({}, src);

console.log(clone);

/* 

Q13. Create a deep clone of a plain-data object using JSON methods (no functions, no Dates).
Given: const src = { a: 1, b: { c: 2 } } 
Goal: Clone so that src.b !== clone.b

*/

const src1 = { a: 1, b: { c: 2 } };

const clone1 = JSON.parse(JSON.stringify(src));

console.log(clone1);
console.log(src1.b === clone.b);

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

Q15. Seal an object and demonstrate you can modify existing values but cannot add/remove keys.
Given: const state = { step: 1 }
Goal: Change step to 2, but adding 'done' should fail
*/

/* 
Q-16. Count how many properties an object has. 
Given: const user = { id: 5, name: 'Lee', active: true }
Goal: Return 3
*/

const user2 = { id: 5, name: "Lee", active: true };
const count = Object.keys(user2).length;

console.log(count);

/*

Q17. Sum numeric property values in an object.
Given: const salaries = { a: 1200, b: 800, c: 600 } 
Goal: Return 2600

*/

const salaries = { a: 1200, b: 800, c: 600 };
const total = Object.values(salaries).reduce((sum, val) => sum + val, 0);

console.log(total);

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
Q19. Rename a key in an object (create new object with 'fname' → 'firstName').
Given: const user = { id: 1, fname: 'Aditi', city: 'Pune' } 
Goal: Return { id: 1, firstName: 'Aditi', city: 'Pune' }

*/

const users = { id: 1, fname: "Aditi", city: "Pune" };

const renamedUser = {
  ...users,
  firstName: users.fname,
};

delete renamedUser.fname;

console.log(renamedUser);

/* 
Q20. Pick a subset of keys into a new object.
Given: const user = { id: 3, name: 'Raj', email: 'r@x.com', role: 'dev' }, keys = ['id', 'email']
Goal: Return { id: 3, email: 'r@x.com' }

*/

const user3 = { id: 3, name: "Raj", email: "r@x.com", role: "dev" };
const keys3 = ["id", "email"];

const selected = keys3.reduce((obj, key) => {
  if (key in user3) {
    obj[key] = user3[key];
  }
  return obj;
}, {});

console.log(selected);

/*

Q21. Omit a set of keys from an object.
Given: const user = { id: 3, name: 'Raj', email: 'r@x.com', role: 'dev' }, omit = ['email'] 
Goal: Return { id: 3, name: 'Raj', role: 'dev' }

*/

const user4 = { id: 3, name: "Raj", email: "r@x.com", role: "dev" };
const omit = ["email"];

const filtered = Object.keys(user4).reduce((obj, key) => {
  if (!omit.includes(key)) {
    obj[key] = user4[key];
  }
  return obj;
}, {});

console.log(filtered);

/* 

Q22. Invert keys and values (assume values are unique strings/numbers). 
Given: const colors = { red: '#f00', green: '#0f0' }
Goal: Return { '#f00': 'red', '#0f0': 'green' }


*/

const colors = { red: "#f00", green: "#0f0" };

const inverted = Object.entries(colors).reduce((obj, [key, value]) => {
  obj[value] = key;
  return obj;
}, {});

console.log(inverted);

/*

Q23. Group an array of objects by a key into an object of arrays.
Given: users = [{id:1, city:'Pune'}, {id:2, city:'Mumbai'}, {id:3, city:'Pune'}]
Goal: Return { Pune: [{id:1, city:'Pune'}, {id:3, city:'Pune'}], Mumbai: [{id:2, city:'Mumbai'}] }


*/
