/* 
Q1. Merge two arrays (concatenate without removing duplicates).
Given: arr1 = [1, 2, 4], arr2 = [4, 6, 7] 
Goal: Return [1, 2, 4, 4, 6, 7]
*/

/* 
Steps to solve the problem 

Step: 1 Ek function banaya.
Step: 2 Do array ko declare kiya.
Step: 3 Ek empty array liya.
Step: 4 Dono array pe for loop lagaya.
Step: 5 Dono array ko empty array mein push kar diya.
*/

function mergearray() {
  let arr1 = [1, 2, 4];
  let arr2 = [4, 6, 7];

  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    arr3.push(arr2[j]);
  }
  console.log("Q1: Mergearray====>", arr3);
}
mergearray();

/* 
Q3. Reverse the array without using any inbuilt array methods (no reverse, no push/pop). 
Use two-pointer swapping or manual loop. 
Given: arr = [6, 7, 9, 1, 5]
 */

/* 
Steps to solve the problem 

Step: 1 Ek function banaya.
Step: 2 Ek array  declare kiya.
Step: 3 Mid value jaannane ke liye formula lagaya.(arr.length/2)
Step: 4 Fir array pe for loop lagaya.
Step: 5 Last mein result ko print karaya.
*/

function reversearray() {
  let arr = [6, 7, 9, 1, 5];

  let mid = arr.length / 2;

  for (let i = 0; i < mid; i++) {
    let j = arr.length - 1 - i;

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  console.log("Q3: Reversearray=====>", arr);
}
reversearray();

/* 
Q4. Remove duplicate values from an array while preserving the first occurrence order (no Set).
Given: arr = [2, 3, 2, 4, 3, 5] 
Goal: Return [2, 3, 4, 5]
*/

/* 
Steps to solve the problem 

Step: 1 Ek function banaya
Step: 2 Ek naya empty array liya jismein unique value stoe karaunga
Step: 3 Fir given array par for loop lagaya
Step: 4 Fir duplicate check karne ka formula likha
Step: 5 Check karo ki current element unique array me pehle se hai ya nahi
Step: 6 Agar duplicate mila to inner loop se bahar nikal jaayega
Step: 7 Agar duplicate nahi mila  to empty array mein add karo
Step: 8 Fir push method use karke value ko empty array mein bhejo.
Step: 9 Fir last mein result ko console karaya aur function ko call kar diya.
*/

function uniquearray() {
  let arr = [2, 3, 2, 4, 3, 5];
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      unique.push(arr[i]);
    }
  }

  console.log("Q4: Uniquearray====>", unique);
}
uniquearray();

/*
Q5. Rotate the array to the left by k steps (in-place if possible). 
Given: arr = [1, 2, 3, 4, 5], k = 2
Goal: Return [3, 4, 5, 1, 2]
*/

/* 
Steps to solve the problem

1. Ek function banao usmein  ek array ko define karo  aur k ki value do ki use kitna rotate karna hai
2. k ko array ki length se divide karke jo remainder aaye wahi k mein dobara store karo
3. Baaki elements ko left mein shift kar do
4. Pahle element ko last mein daal do

*/

function rotatearray() {
  let arr4 = [1, 2, 3, 4, 5];
  let k = 2;

  k = k % arr4.length;

  for (let step = 0; step < k; step++) {
    let first = arr4[0];

    for (let i = 0; i < arr4.length - 1; i++) {
      arr4[i] = arr4[i + 1];
    }

    arr4[arr4.length - 1] = first;
  }

  console.log("Q5: Rotatearrayleft===>", arr4);
}
rotatearray();

/* 
Q6. Rotate the array to the right by k steps (in-place if possible).
Given: arr = [10, 20, 30, 40, 50], k = 1 
Goal: Return [50, 10, 20, 30, 40]
*/

/* 
Steps to solve the problem

1. Ek function banao usmein  ek array ko define karo  aur k ki value do ki use kitna rotate karna hai
2. k ko array ki length se divide karke jo remainder aaye wahi k mein dobara store karo
3. Array ko right side me 1 step shift karna, aur yeh kaam total k1 times karna.(Ist for loop)
4.Array ke sabhi elements ko ek-ek step right shift karna.(2nd for loop)
5. Pahle element ko last mein daal do

*/

function rotatearrayright() {
  let arr5 = [10, 20, 30, 40, 50];
  let k1 = 1;

  k1 = k1 % arr5.length;

  for (let step = 0; step < k1; step++) {
    let last = arr5[arr5.length - 1];

    for (let i = arr5.length - 1; i > 0; i--) {
      arr5[i] = arr5[i - 1];
    }

    arr5[0] = last;
  }

  console.log("Q6: Rotatearrayright===>", arr5);
}
rotatearrayright();

/* 
Q7. Compute the sum of all numbers in the array (no reduce). 
Given: arr = [5, 8, 2, 4]
Goal: Return 19
*/

/* 

Steps to solve:

1.Ek function banao aur arr ko declare karunga.
2. Ek variable sum ko 0 se initialize karo (kyunki addition start zero se hota hai).
3. Array par for loop use karunga.
4. Har element ko sum me add karo.
5. Loop khatam hone ke baad sum print/return karo.

*/

function sumArray() {
  let arr = [5, 8, 2, 4];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log("Q7: Sum====>", sum);
}
sumArray();

/*

Q8. Compute the product of all numbers in the array.
Given: arr = [1, 3, 2, 4] 
Goal: Return 24

*/

/*
Steps to Solve:

1. Function banao, array declare karo.
2. product ko 1 se initialize karo (kyunki multiply karte waqt starting 1 hota hai).
3. Har element ko loop me leke product *= arr[i] karo.
4. Result print/return karo.
*/

function productArray() {
  let arr = [1, 3, 2, 4];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  console.log("Q8: Product====>", product);
}
productArray();

/*
Q9. Find the maximum number in the array (no Math.max spread). 
Given: arr = [9, 2, 17, 6, 4]
Goal: Return 17
*/

/*
Steps to Solve :

1. Function banao, array declare karo.
2. Ek variable max ko array ke pehle element se initialize karo.
3. Loop chalao: agar arr[i] > max ho to max = arr[i] karo.
4. Loop end hone par max hi sabse bada number hoga.
*/

function maxArray() {
  let arr = [9, 2, 17, 6, 4];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log("Q9: Max====>", max);
}
maxArray();

/*
Q10. Find the minimum number in the array.
Given: arr = [9, 2, 17, 6, 4] 
Goal: Return 2
*/

/* 
Steps to Solve:
1. Function banao aur  array declare karo.
2. min ko pehle element se initialize karo.
3. Loop chalao: agar arr[i] < min ho to min = arr[i].
4. Loop ke end par min sabse chhota number hoga.
*/

function minArray() {
  let arr = [9, 2, 17, 6, 4];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("Q10: Min====>", min);
}
minArray();

/*
Q12. Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3 
Goal: Return 3
*/

/*

 Steps to Solve

1. Function banao 
Function ko declare karko aur target aur array rahega ismein.
2. Array declare karo
3. For loop chalao
for (let i = 0; i < arr.length; i++) { ... }
Isse array ka har element check karenge.
4. Check karo element target ke barabar hai ya nahi
if (arr[i] === target) { count++; }
5. Agar equal hai to count ko 1 se badha do.
6. Loop ke baad result print/return karo
console.log(count);
7. Ye target number ki total occurrences dega.

*/

function countOccurrences() {
  let arr = [3, 5, 3, 2, 3, 1];
  let target = 3;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  console.log("Q12: Occurrences of====>", count);
}

countOccurrences();

/*

Q13. Find the index of the first occurrence of a target value (manual search). 
Given: arr = [4, 7, 9, 7, 2], target = 7
Goal: Return 1
*/

/* 
Steps to Solve the problem:

1. Function banao aur array declare karo.
2. Target value define karo.
3. Loop chalao array ke har element par.
4.Agar current element target ke barabar ho → index return/print karo.
5.Agar loop ke end tak nahi mila → -1 return kar do (optional).

*/

function firstOccurrences() {
  let arr = [4, 7, 9, 7, 2];
  let target = 7;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("Q13: FirstOccurence====>", i);
      return;
    }
  }
}
firstOccurrences();

/*
Q14. Find the index of the last occurrence of a target value (manual search).
Given: arr = [4, 7, 9, 7, 2], target = 7 
Goal: Return 3
*/

/* 
Steps to solve the problem:

1.Function banao aur array + target define karo.
2.Loop array ke end se start tak chalao (i = arr.length - 1; i >= 0; i--).
3.Agar current element arr[i] === target ho → index print/return karo.
4.Agar loop end tak na mile → -1 return (optional).
*/

function lastOccurrence() {
  let arr = [4, 7, 9, 7, 2];
  let target = 7;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      console.log("Q14: Last occurrence===>", i);
      return;
    }
  }
}
lastOccurrence();

/* 
Q18. Remove all falsy values (false, 0, '', NaN, null, undefined) from an array without using filter().
Given: arr = [0, 1, false, 2, '', 3, null] Goal: Return [1, 2, 3]
*/

/* 
Steps to Solve

1. Function banao aur array declare karo.
2. Ek result array banalo: cleaned = [].
3. for loop chalao poore array par.
4. Har element check karo truthy hai ya nahi:
5. JavaScript me if (arr[i]) likhne par
6. Agar value truthy hai to if chalega,
7. Falsy (0, '', false, null, undefined, NaN) skip ho jaayega.
8. Agar truthy hai to cleaned.push(arr[i]).
9. Loop ke baad cleaned print/return karo.
*/

function removeFalsy() {
  let arr = [0, 1, false, 2, "", 3, null];
  let filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filtered.push(arr[i]);
    }
  }

  console.log("Q18: Filtered====>", filtered);
}
removeFalsy();

/* 
Q19. Insert a value at a given index (shift elements right, no splice). 
Given: arr = [10, 20, 30, 40], index = 2, value = 99
Goal: Return [10, 20, 99, 30, 40]
*/

/* 
1.Function banao aur array declare karo.
2.Last element se index tak loop chalao right to left:
3.arr[i + 1] = arr[i] → sab elements ek step right shift ho jayenge.
4.arr[index] = value → naya value insert karo.
5.Result print/return karo.
*/

function insertAtIndex() {
  let arr = [10, 20, 30, 40];
  let index = 2;
  let value = 99;

  // Right shift elements
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }

  arr[index] = value; // insert value
  console.log("Q19: After insertion===>", arr);
}
insertAtIndex();

/* 
Q20. Delete the element at a given index (shift elements left, no splice).
Given: arr = [10, 20, 30, 40], index = 1 
Goal: Return [10, 30, 40]
*/

/* 
Steps to Solve

1. Function banao aur array declare karo.
2. index ke baad ke elements ko left shift karo:
           arr[i] = arr[i + 1]

3. Last element ko remove karo ya array length reduce karo: arr.length--
4. Result print/return karo.
*/

function deleteAtIndex() {
  let arr = [10, 20, 30, 40];
  let index = 1;

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;
  console.log("Q20: After deletion====>", arr);
}
deleteAtIndex();

/* 
Q21. Split an array into chunks of size n (last chunk may be smaller). 
Given: arr = [1, 2, 3, 4, 5], n = 2
Goal: Return [[1, 2], [3, 4], [5]]
*/

/*
Steps to solve the problem:

1.Function banao aur array declare karo.
2.Ek empty array chunks = [] banalo.
3.Loop chalao step n se (i += n)
4.Slice current chunk: arr.slice(i, i + n)
5.Chunk ko chunks me push karo.
6.Loop ke baad chunks print/return karo.

*/

function splitIntoChunks() {
  let arr = [1, 2, 3, 4, 5];
  let n = 2;
  let chunks = [];

  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }

  console.log("Q21: Chunks====>", chunks);
}
splitIntoChunks();

/*
Q23. Elements in arr1 that are not in arr2 (relative difference). 
Given: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5]
Goal: Return [1, 2]
*/

/* 

Steps to Solve the problem.

1.Function banao aur arrays define karo.
2.Empty array diff = [] banalo.
3.Loop chalao arr1 ke har element par.
4.Check karo agar arr2 me wo element nahi hai (arr2.includes(arr1[i]) === false)
5.Agar nahi hai → diff.push(arr1[i])
6.Loop ke baad diff print/return karo.

*/

function relativeDifference() {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [3, 4, 5];
  let diff = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      diff.push(arr1[i]);
    }
  }

  console.log("Q23: Relative difference===>", diff);
}
relativeDifference();

/* 

Q24. Union of two arrays (unique values, order by first appearance).
Given: arr1 = [1, 2, 2], arr2 = [2, 3] 
Goal: Return [1, 2, 3]

*/

/* 
Steps to solve the problem.

1.Function banao aur arrays define karo.
2.Empty array union = [] banalo.
3.Arr1 ke har element ko loop karo:
4.Agar union me nahi hai → push karo.
5.Arr2 ke har element ko loop karo:
6.Agar union me nahi hai → push karo.
7.Loop ke baad union print/return karo.

*/

function unionArrays() {
  let arr1 = [1, 2, 2];
  let arr2 = [2, 3];
  let union = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!union.includes(arr1[i])) union.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) union.push(arr2[i]);
  }

  console.log("Q24: Union===>", union);
}
unionArrays();

/* 

Q28. Remove all occurrences of a value from an array (no filter).
Given: arr = [3, 1, 3, 2, 3, 4], value = 3 
Goal: Return [1, 2, 4]

*/

/* 
Steps to Solve:

1.Empty array result → sirf elements jinko remove nahi karna, unko store karne ke liye.

Loop → array ke har element ko check karna.

Condition → agar element target value nahi hai → push karo.

Ignore → agar element target value hai, kuch na karo.

Loop ke baad result → final array jo value remove karne ke baad bacha.


*/

function removeAllOccurrences() {
  let arr = [3, 1, 3, 2, 3, 4];
  let value = 3;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      result.push(arr[i]);
    }
  }

  console.log("Q28: RemoveAllOccurrence====>", result);
}

removeAllOccurrences();
