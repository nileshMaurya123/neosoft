/*
Q1. Access a property by key.
Given: const user = { name: 'Asha', age: 25, city: 'Pune' } 
Goal: Return 25 (the value of user.age)
*/

const user = { name: "Asha", age: 25, city: "Pune" };
user.age = 25;
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
const deleted = delete product.discount;
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

const config = { darkMode: true };
console.log("darkMode" in config);
console.log("lang" in config);

console.log(config.hasOwnProperty("darkMode"));
console.log(config.hasOwnProperty("lang"));

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
Goal: Return ['title', 'pages', 'author']

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
console.log(Object.entries(settings));

/* 

Q10. Merge two shallow objects (right overwrites left on conflicts). 
Given: obj1 = { a: 1, b: 2 }, obj2 = { b: 9, c: 3 }
Goal: Return { a: 1, b: 9, c: 3 }

*/

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 9, c: 3 };

const merge = { ...obj1, ...obj2 };
console.log(merge);

/* 
Q12. Create a shallow clone of an object (changes to clone should not affect original top-level fields). 
Given: const src = { x: 1, y: 2 }
Goal: Return a new object { x: 1, y: 2 }
*/

const src = { x: 1, y: 2 };
const clone = { ...src };
console.log(clone);

/*
Q13. Create a deep clone of a plain-data object using JSON methods (no functions, no Dates).
Given: const src = { a: 1, b: { c: 2 } } 
Goal: Clone so that src.b !== clone.b
*/

const src2 = { a: 1, b: { c: 2 } };
const clone2 = JSON.parse(JSON.stringify(src2));
console.log(src.b !== clone.b);

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

/*


Q40. Stringify an object to JSON and parse it back (round-trip). 
Given: obj = { x: 1, y: [2,3] }
Goal: Return same structure after parse

*/

const obj6 = { x: 1, y: [2, 3] };
const JSONstr = JSON.stringify(obj6);

const parsedObj = JSON.parse(JSONstr);
console.log(parsedObj);

/* 

Q42. Create an object with a prototype and a method; then create a child object using Object.create(). 
Given: proto = { greet(){ return 'hi'; } }
Goal: child.greet() returns 'hi'

*/

const proto = {
  greet() {
    return "hi";
  },
};
const child = Object.create(proto);
console.log(child.greet());

/* 
Q43. Check prototype chain relation using isPrototypeOf.
Given: parent = {}, child = Object.create(parent) 
Goal: Return true for parent.isPrototypeOf(child)
*/

const parent = {};
const childs = Object.create(parent);
console.log(parent.isPrototypeOf(childs));

/* 
Q44. Define a class and instantiate it into an object.
Given: class User { constructor(id, name){ this.id=id; this.name=name; } }
Goal: new User(1, 'Sam') → { id:1, name:'Sam' }
*/

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
const userInstance = new User(1, "Sam");
console.log(userInstance);

/* 
Q21. Omit a set of keys from an object.
Given: const user = { id: 3, name: 'Raj', email: 'r@x.com', role: 'dev' }, omit = ['email']
Goal: Return { id: 3, name: 'Raj', role: 'dev' }

*/

const originalObject = { id: 3, name: "Raj", email: "r@x.com", role: "dev" };
const { email, ...newObject } = originalObject;
console.log(newObject);

/* 
Q33. Check shallow equality of two objects (same keys and values, order irrelevant).
Given: a = { x: 1, y: 2 }, b = { y: 2, x: 1 } 
Goal: Return true
*/

const a = { x: 1, y: 2 };
const b = { y: 2, x: 1 };

function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check values for each key
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(shallowEqual(a, b));

/* 

Q38. Filter an object to keep only numeric values. 
Given: obj = { a: 1, b: '2', c: 3 }
Goal: Return { a: 1, c: 3 }

*/

const obj3 = { a: 1, b: "2", c: 3 };

const filteredObj = Object.fromEntries(
  Object.entries(obj3).filter(([key, value]) => typeof value === "number")
);

console.log(filteredObj);

// Object.entries : Converts object to an array.
// Object.fromEntries : Converts array back to obj.
