/* 
Q21. Split an array into chunks of size n (last chunk may be smaller). 
Given: arr = [1, 2, 3, 4, 5], n = 2
Goal: Return [[1, 2], [3, 4], [5]]
*/

/* 
Steps to Solve:

1. I will define a function.
2. I will take a empty variable result to store the value.
3. I will iterate through given array by using for loop.
4. i, i+n means i will break array on n steps.
5. arr.slice(i, i+n) means I will take out this part of array
6. the chunk i have taken out i will store it in result varaiable.
7. I will call the function and consoles the output.
*/

function chunkArray(arr, n) {
  const result = [];

  for (let i = 0; i < arr.length; i += n) {
    const chunk = arr.slice(i, i + n);
    result.push(chunk);
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];
const n = 2;
console.log("ChunkArray===>", chunkArray(arr, n));

/* 

Q22. Flatten a one-level nested array without using flat().
Given: arr = [1, [2, 3], 4, [5]] 
Goal: Return [1, 2, 3, 4, 5]

*/

/* 
Steps to Solve

1. I will define a function.
2. I will take a empty array name result.
3. Array. isArray will check the given item is array or not.
4. We will use for loop to iterate over array.
5. if item is an array then again loop will iterate through this.
6. We will put nested element in empty array named result.
7. If item is not nested value we will directly store in result.
*/

function flattenOneLevel(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

const arr2 = [1, [2, 3], 4, [5]];
console.log("FlatArray===>", flattenOneLevel(arr2));

/* 
Q28. Remove all occurrences of a value from an array (no filter).
Given: arr = [3, 1, 3, 2, 3, 4], value = 3 
Goal: Return [1, 2, 4]
*/

/*
Steps to Solve:

1. First we will define a function that takes two values arr and value.
2. We will take empty array to store the the values we want to remove.
3. We will use for loop on give array to access its elements one by one.
4. This will check that the current item is not that value we want to remove.
5. Means if item is different from the item we want to remove. So we move that to the result.
6. In this way, only those items will go into the result that are different from the value to be removed.
*/

function removeValue(arr, value) {
  const result = [];

  for (const item of arr) {
    if (item !== value) {
      result.push(item);
    }
  }

  return result;
}

const arr3 = [3, 1, 3, 2, 3, 4];
const value = 3;
console.log("RemoveArray===>", removeValue(arr3, value));

/*
Q29. Replace all occurrences of a value with another value. 
Given: arr = [1, 2, 2, 3, 2], from = 2, to = 9
Goal: Return [1, 9, 9, 3, 9]

*/

/* 
Steps to Solve:

1. First we will define a function that will take 3 values arr ,from and to
2. arr : is the input array from is the value  we want to replace and to is the value we want to replace it with.
3. We will create an empty array named  result to store the modified elements.
4. Now I will use for loop to iterate all items of array one by one.
5. If the current item is equal to the `from` value, we will push the `to` value into the result array.
6. If the item is not equal to `from`, we will push it as-is into the result array.
*/

function replaceAll(arr, from, to) {
  const result = [];

  for (const item of arr) {
    if (item === from) {
      result.push(to);
    } else {
      result.push(item);
    }
  }

  return result;
}

const arr4 = [1, 2, 2, 3, 2];
const from = 2;
const to = 9;

console.log("ReplaceArray===>", replaceAll(arr4, from, to));
