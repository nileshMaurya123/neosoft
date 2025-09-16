/* 
Q1. Access a property by key.
Given: const user = { name: 'Asha', age: 25, city: 'Pune' } 
Goal: Return 25 (the value of user.age)

*/

const user = {
  name: "Asha",
  age: 25,
  city: "Pune",
};

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
const remove = delete product.discount;
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


Q6. Get all keys of an object.
Given: const book = { title: 'JS Basics', pages: 180, author: 'RK' }
Goal: Return ['title', 'pages', 'author']
*/

const book = { title: "JS Basics", pages: 180, author: "RK" };
console.log(Object.keys(book));

/* 

Q7. Get all values of an object.
Given: const book = { title: 'JS Basics', pages: 180, author: 'RK' } 
Goal: Return ['JS Basics', 180, 'RK']

*/

const books = { title: "JS Basics", pages: 180, author: "RK" };
console.log(Object.values(books));

/* 

Q8. Get key–value pairs (entries).
Given: const settings = { sound: true, quality: 'HD' }
Goal: Return [['sound', true], ['quality', 'HD']]

*/

const settings = { sound: true, quality: "HD" };
console.log(Object.entries(settings));

/* 

Q9. Build an object from two arrays of equal length (keys and values).
Given: keys = ['id', 'name'], values = [101, 'Sam'] 
Goal: Return { id: 101, name: 'Sam' }

*/

const keys = ["id", "name"];
const values = [101, "Sam"];

const obj = Object.fromEntries(keys.map((key, index) => [key, values[index]]));

console.log(obj);

/* 


Q10. Merge two shallow objects (right overwrites left on conflicts). 
Given: obj1 = { a: 1, b: 2 }, obj2 = { b: 9, c: 3 }
Goal: Return { a: 1, b: 9, c: 3 }
*/
obj1 = { a: 1, b: 2 };
obj2 = { b: 9, c: 3 };

const merged = { ...obj1, ...obj2 };
console.log(merged);
