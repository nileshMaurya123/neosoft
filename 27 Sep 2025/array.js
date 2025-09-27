/*
Question 3:- Write a function to calculate the sum of all numbers in:
let arr = [10, 20, 30, 40];
*/

function sumnumber() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
let arr = [10, 20, 30, 40];
console.log(sumnumber(arr));

/* 
Question 4:- Merge both arrays without using spread operator.
let arr1 = [3, 1, 4];
let arr2 = [2, 5];

*/

const arr1 = [3, 1, 4];
const arr2 = [2, 5];

const result = arr1.concat(arr2);
console.log(result);

/* 
Question 2:- Remove duplicates;
let arr = [1, 2, 2, 3, 4, 4, 5];
*/

/*
function removeduplicates() {
  for (let i = 0; i < arr.length; i++) {
    let duplicate = [];
    if (index[i] === target) {
      result.push(duplicate);
    }
  }
}
const duparr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeduplicates(duparr));
*/

/* 
Question 1:- Find the maximum element
let arr = [12, 45, 7, 89, 23];
*/

function maxnumber() {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = arrmax[i];
  }
  console.log(max);
}
let arrmax = [12, 45, 7, 89, 23];
console.log(maxnumber(arrmax));

/* 
Question 5:- Write code to reverse this array without using reverse():
let arr = [1, 2, 3, 4, 5];
*/
/*
const reversearr=[1,2,3,4,5];
for(let i=0; i<reversearr.length;i++){
    const result =[];
    if(){

    }
}
    */
