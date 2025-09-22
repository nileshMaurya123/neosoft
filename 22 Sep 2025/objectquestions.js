/*
Q23. Group an array of objects by a key into an object of arrays.
Given: users = [{id:1, city:'Pune'}, {id:2, city:'Mumbai'}, {id:3, city:'Pune'}]
Goal: Return { Pune: [{id:1, city:'Pune'}, {id:3, city:'Pune'}], Mumbai: [{id:2, city:'Mumbai'}] }
*/

const users = [
  { id: 1, city: "Pune" },
  { id: 2, city: "Mumbai" },
  { id: 3, city: "Pune" },
];

const grouped = users.reduce((a, u) => ((a[u.city] ??= []).push(u), a), {});

console.log(grouped);

/* 
Q29. Safely read a nested property with a path string (e.g., 'user.address.city').
Given: obj = { user: { address: { city: 'Pune' } } }, path = 'user.address.city' 
Goal: Return 'Pune'
*/

const obj = { user: { address: { city: "Pune" } } };

const path = "user.address.city";

function get(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

console.log(get(obj, path));

/*
Q46. Toggle a boolean property in an object and return a new object (immutably). 
Given: settings = { wifi: true, bt: false }
Goal: Toggle bt → { wifi: true, bt: true }
*/

const settings = { wifi: true, bt: false };

// Toggle the 'bt' property immutably
const updatedSettings = {
  ...settings,
  bt: !settings.bt,
};

console.log(updatedSettings);

/* 
Q50. Validate an object against a simple schema object of expected types (string, number, boolean).
Given: obj = { name: 'Neo', age: 30, active: true }, schema = { name: 'string', age: 'number', active: 'boolean' }
Goal: Return true
*/

const obj2 = { name: "Neo", age: 30, active: true };
const schema = { name: "string", age: "number", active: "boolean" };

function validate(obj2, schema) {
  return Object.keys(schema).every((key) => typeof obj2[key] === schema[key]);
}

console.log(validate(obj2, schema));
