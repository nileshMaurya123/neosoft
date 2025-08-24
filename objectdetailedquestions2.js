/* 
Q26. Remove an object from an array by id (immutably). 
Given: items = [{id:1}, {id:2}, {id:3}], id = 2
Goal: Return [{id:1}, {id:3}]
*/

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

const id = 2;

const updatedItems = items.filter((item) => item.id !== id);

console.log(updatedItems);

/* Q-27. Convert an object to a query string 'a=1&b;=2' (encode keys/values).
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
