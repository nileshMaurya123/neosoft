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
Q-27. Convert an object to a query string 'a=1&b;=2' (encode keys/values).
Given: const params = { a: 1, b: 'hi' } 
Goal: Return 'a=1&b;=hi'
*/

const params = { a: 1, b: "hi" };

const queryString = Object.entries(params)
  .map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  )
  .join("&");

console.log(queryString);

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
Q29. Safely read a nested property with a path string (e.g., 'user.address.city').
Given: obj = { user: { address: { city: 'Pune' } } }, path = 'user.address.city' 
Goal: Return 'Pune'
*/

const obj = { user: { address: { city: "Pune" } } };
const path = "user.address.city";

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

console.log(getNestedValue(obj, path));

/* 
Q-30.Set a nested property by path, creating objects as needed. 
Given: obj = {}, path = 'a.b.c', value = 5
Goal: Resulting obj is { a: { b: { c: 5 } } }
*/

const obj3 = {};
const path3 = "a.b.c";
const value = 5;

const setNestedValue = (obj3, path3, value) => {
  const keys = path3.split("."); // Split path into keys
  keys.reduce((acc, key, index) => {
    // If we're at the last key, set the value
    if (index === keys.length - 1) {
      acc[key] = value;
    } else {
      // Create an empty object if the key doesn't exist
      acc[key] = acc[key] || {};
    }
    return acc[key]; // Move down to the next level of the object
  }, obj3);
};

setNestedValue(obj3, path3, value);

console.log(obj3);

/*

Q31. Flatten a nested object to dot-notation keys.
Given: obj = { a: { b: { c: 1 } }, d: 2 } 
Goal: Return { 'a.b.c': 1, d: 2 }

*/

function flattenObject(obj, parent = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const prop = obj[key];
      const newKey = parent ? `${parent}.${key}` : key;

      // If the value is an object, recurse
      if (typeof prop === "object" && prop !== null) {
        flattenObject(prop, newKey, result);
      } else {
        result[newKey] = prop;
      }
    }
  }
  return result;
}

// Test with the provided object
const obj2 = { a: { b: { c: 1 } }, d: 2 };
console.log(flattenObject(obj2));

/*
Q32. Unflatten a dot-notation object back to nested structure. 
Given: flat = { 'a.b': 2, 'a.c': 3 }
Goal: Return { a: { b: 2, c: 3 } }
*/

function unflattenObject(flat) {
  const result = {};

  for (let key in flat) {
    const keys = key.split("."); // Split the dot-notation into individual keys
    keys.reduce((acc, part, index) => {
      if (index === keys.length - 1) {
        acc[part] = flat[key]; // Assign the value to the final key
      } else {
        if (!acc[part]) acc[part] = {}; // Create an empty object if it doesn't exist
      }
      return acc[part];
    }, result);
  }

  return result;
}

// Test with the provided object
const flat = { "a.b": 2, "a.c": 3 };
console.log(unflattenObject(flat));

/* 
Q33. Check shallow equality of two objects (same keys and values, order irrelevant).
Given: a = { x: 1, y: 2 }, b = { y: 2, x: 1 } 
Goal: Return true

*/

function shallowEqual(a, b) {
  // Get sorted keys of both objects
  const keysA = Object.keys(a).sort();
  const keysB = Object.keys(b).sort();

  // If they have different number of keys, they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare each key and its corresponding value
  for (let i = 0; i < keysA.length; i++) {
    if (keysA[i] !== keysB[i] || a[keysA[i]] !== b[keysB[i]]) {
      return false;
    }
  }

  return true;
}

// Test with the provided objects
const a = { x: 1, y: 2 };
const b = { y: 2, x: 1 };

console.log(shallowEqual(a, b));

/* 
Q34. Check deep equality of two plain objects (including nested objects/arrays). 
Given: a = { x: { y: 2 } }, b = { x: { y: 2 } } 
Goal: Return true
*/

function deepEqual(a, b) {
  // If both are the same reference or both are NaN
  if (a === b) return true;

  // If either is not an object or one is null, they are not equal
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // Get the keys of both objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If they have different number of keys, they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Recursively compare each key-value pair
  for (let key of keysA) {
    // Check if both objects have the same key and the corresponding values are deeply equal
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// Test with the provided objects
const a1 = { x: { y: 2 } };
const b1 = { x: { y: 2 } };

console.log(deepEqual(a1, b1));

/* 
Q35. Convert an array of [key, value] pairs into an object (like Object.fromEntries).
Given: pairs = [['id', 7], ['name', 'Neo']] 
Goal: Return { id: 7, name: 'Neo' }
*/

function fromPairs(pairs) {
  return pairs.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

// Test with the provided array
const pairs = [
  ["id", 7],
  ["name", "Neo"],
];
console.log(fromPairs(pairs));

/* 
Q36. Convert an object to a Map and back to an object. 
Given: obj = { a: 1, b: 2 }
Goal: Create Map([['a',1],['b',2]]) then back to { a: 1, b: 2 }
*/

// Given object
const obj4 = { a: 1, b: 2 };

// 1. Convert object to Map
const map = new Map(Object.entries(obj4));
console.log(map); // Output: Map(2) { 'a' => 1, 'b' => 2 }

// 2. Convert Map back to object
const newObj = Object.fromEntries(map);
console.log(newObj);

/* 
Q37. Remove properties with falsy values from an object.
Given: obj = { a: 0, b: 2, c: '', d: 'ok' } 
Goal: Return { b: 2, d: 'ok' }
*/

function removeFalsyValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value) // Filter out falsy values
  );
}

// Test with the provided object
const obj5 = { a: 0, b: 2, c: "", d: "ok" };
console.log(removeFalsyValues(obj5));

/* 
Q38. Filter an object to keep only numeric values. 
Given: obj = { a: 1, b: '2', c: 3 }
Goal: Return { a: 1, c: 3 }
*/

function keepNumericValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => typeof value === "number")
  );
}

// Test with the provided object
const obj6 = { a: 1, b: "2", c: 3 };
console.log(keepNumericValues(obj6));

/*
Q39. Return a new object whose keys are sorted alphabetically (values preserved).
Given: obj = { b: 2, a: 1, c: 3 } 
Goal: Return { a: 1, b: 2, c: 3 }
*/

const myobj = { b: 2, a: 1, c: 3 };

const sortedObj = Object.keys(myobj)
  .sort() // Sorts the keys alphabetically
  .reduce((acc, key) => {
    acc[key] = myobj[key]; // Adds the key-value pair to the new object
    return acc;
  }, {});

console.log(sortedObj);

/*

Q-40. Q40. Stringify an object to JSON and parse it back (round-trip). 
Given: obj = { x: 1, y: [2,3] }
Goal: Return same structure after parse

*/

const myobj2 = { x: 1, y: [2, 3] };

// Step 1: Stringify the object to JSON
const jsonString = JSON.stringify(myobj2);

// Step 2: Parse the JSON string back to an object
const parsedObj = JSON.parse(jsonString);

console.log(parsedObj);

/* 
Q41. Define getters and setters on an object using property descriptors.
Given: const account = { _balance: 1000 } 
Goal: Define get balance() and set balance(v)

*/

const account = { _balance: 1000 };

// Define getter and setter for balance
Object.defineProperty(account, "balance", {
  get() {
    return this._balance;
  },
  set(value) {
    if (value >= 0) {
      this._balance = value;
    } else {
      console.log("Balance cannot be negative");
    }
  },
  enumerable: true, // Makes the property enumerable
  configurable: true, // Allows the property to be redefined later
});

// Testing the getter and setter
console.log(account.balance); // Output: 1000 (getter)

account.balance = 2000; // Setter is called
console.log(account.balance);

account.balance = -500; // Setter validation: Balance cannot be negative
console.log(account.balance);

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
Q44. Define a class and instantiate it into an object.
Given: class User { constructor(id, name){ this.id=id; this.name=name; } }
Goal: new User(1, 'Sam') → { id:1, name:'Sam' }

*/

// Define the class
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// Instantiate the class with new
const user = new User(1, "Sam");

console.log(user);

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

/* 

Q46. Toggle a boolean property in an object and return a new object (immutably). 
Given: settings = { wifi: true, bt: false }
Goal: Toggle bt → { wifi: true, bt: true }

*/

const settings = { wifi: true, bt: false };

// Toggle the 'bt' property immutably
const updatedSettings = {
  ...settings, // Copy all properties from the original object
  bt: !settings.bt, // Toggle the 'bt' property
};

console.log(updatedSettings);

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

/* 
Q48. Remove a deeply nested key (delete by path) and return new object. 
Given: obj = { a: { b: { c: 1, d: 2 } } }, path = 'a.b.c'
Goal: Return { a: { b: { d: 2 } } }
*/

const obj7 = { a: { b: { c: 1, d: 2 } } };
const path7 = "a.b.c";

// Function to delete a deeply nested key
function deleteByPath(obj7, path7) {
  const keys = path7.split("."); // Split the path into an array of keys
  const newObj = { ...obj7 }; // Create a shallow copy of the original object

  let current = newObj;
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]] = { ...current[keys[i]] }; // Copy nested objects
  }

  delete current[keys[keys.length - 1]]; // Delete the final key
  return newObj;
}

// Call the function
const updatedObj = deleteByPath(obj, path);

console.log(updatedObj);

/* 
Q49. Replace keys using a mapping object (rename multiple keys).
Given: user = { fn: 'Asha', ln: 'Sharma' }, map = { fn: 'firstName', ln: 'lastName' } 
Goal: Return { firstName: 'Asha', lastName: 'Sharma' }
*/

const myuser = { fn: "Asha", ln: "Sharma" };
const mymap = { fn: "firstName", ln: "lastName" };

// Function to replace keys based on the mapping object
function renameKeys(obj, mapping) {
  const newObj = {}; // Create a new object for the result

  // Iterate over the original object
  Object.keys(obj).forEach((key) => {
    const newKey = mapping[key] || key; // Get the mapped key or use the original key if no mapping exists
    newObj[newKey] = obj[key]; // Assign the value to the new key in the new object
  });

  return newObj;
}

// Call the function
const renamedUser = renameKeys(myuser, mymap);

console.log(renamedUser);

/* 
Q50. Validate an object against a simple schema object of expected types (string, number, boolean).
Given: obj = { name: 'Neo', age: 30, active: true }, schema = { name: 'string', age: 'number', active: 'boolean' }
Goal: Return true
*/

const obj8 = { name: "Neo", age: 30, active: true };
const schema = { name: "string", age: "number", active: "boolean" };

// Function to validate the object against the schema
function validateObject(obj8, schema) {
  return Object.keys(schema).every((key) => {
    const expectedType = schema[key];
    const actualType = typeof obj8[key];
    return expectedType === actualType;
  });
}

// Call the function
const isValid = validateObject(obj8, schema);

console.log(isValid);
