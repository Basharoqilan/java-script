console.log("Here is : ", "array")[
  /*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
  (1, 7, 9, 45)
][("Str", "alex", "moh")][("the", "fox", "over", "lazy", "dog")];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"];
let x = fruits.indexOf("Banana");
let y = fruits.indexOf("Tomato");
console.log(x);
console.log(y);

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let Favorite_Food = ["fesh,macaroni,Mansa,Kofta,Falafel"];
let Favorite_Sport = ["footboll,basktball,tenes"];
let Favorite_Movie = ["culur,kurtlar_vadisi,osman"];
console.log(Favorite_Food);
console.log(Favorite_Sport);
console.log(Favorite_Movie);

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray() {
  let firstOfArray1 = [1, 4, 5];
  let firstOfArray2 = ["t", "u", "g", "x"];
  console.log(firstOfArray1[0]);
  console.log(firstOfArray2[0]);
}
firstOfArray();
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray() {
  let lastOfArray1 = [1, 4, 5];
  let lastOfArray2 = ["t", "u", "g", "x"];
  let x = lastOfArray1.length;
  let y = lastOfArray2.length;
  console.log(lastOfArray1[x - 1]);
  console.log(lastOfArray2[y - 1]);
}
lastOfArray();

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
array.push(10);
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];
array2.push(1);
console.log(array2);
array2.unshift(5);
console.log(array2);
array2.shift();
console.log(array2);
array2.pop();
console.log(array2);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray() {
  let middleOfArray1 = [1, 4, 5, 3, 6];
  let middleOfArray2 = ["t", "u", "g", "x", "i", "s"];
  if (middleOfArray1.length % 2 != 0) {
    let X = Math.floor(middleOfArray1.length / 2);
    console.log(middleOfArray1[X]);
  }

  if (middleOfArray2.length % 2 === 0) {
    let Y = Math.floor((middleOfArray2.length - 1) / 2);
    let Z = Math.ceil((middleOfArray2.length - 1) / 2);
    console.log(middleOfArray2[Y]);
    console.log(middleOfArray2[Z]);
  }
}
middleOfArray();
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ["cat", "ele", "bird"];
animals[0] = "zebra";
animals[1] = "elephant";
animals.pop();
console.log(animals);

var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(num, index) {
  var y = num[index];
  console.log(y);
}
var nums = [1, 2, 3, 8, 9];
indexOfArray(nums, 3);
indexOfArray(nums, 1);
indexOfArray(nums, 4);
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast() {
  var nums = [1, 2, 3, 8, 9];
  nums.pop();
  console.log(nums);
}
arrayExceptLast();

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd() {
  var nums = [1, 2, 3, 8, 9];
  var x = 55;
  nums.pop();
  nums.push(x);
  console.log(nums);
}
addToEnd();
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray() {
  let sum = 0;
  var nums = [1, 2, 3, 8, 9];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log(sum);
}
sumArray();

function sumArray() {
  var nums = [1, 2, 3, 8, 9];
  var Y = nums.length;
  var i = 0;
  while (Y != 0) {
    sum = sum + nums[i];
    i++;
    Y--;
  }
}
let sum = 0;
sumArray();
console.log(sum);
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray() {
  var nums = [1, 2, 3, 8, 9];
  var X = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (X > nums[i]) {
      X = nums[i];
    }
  }
  console.log(X);
}
minInArray();

function minInArray() {
  var nums = [1, 2, 3, 8, 9];
  var X = nums[0];
  let i = 1;
  Y = nums.length;
  while (Y > 0) {
    if (X > nums[i]) {
      X = nums[i];
    }
    Y--;
    i++;
  }
  console.log(X);
}
minInArray();
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray() {
  var nums = [1, 2, 3, 8, 9];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 8) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
}
removeFromArray();

removeFromArray();

function removeFromArray() {
  var nums = [1, 2, 3, 8, 9];
  let i = 0;
  Y = nums.length;
  while (Y > 0) {
    if (nums[i] === 8) {
      nums.splice(i, 1);
      i--;
    }
    Y--;
    i++;
  }
  console.log(nums);
}
removeFromArray();

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray() {
  var nums = [1, 2, 3, 8, 9];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
}
oddArray();

function oddArray() {
  var nums = [1, 2, 3, 8, 9];
  let i = 0;
  Y = nums.length;
  while (Y > 0) {
    if (nums[i] % 2 === 0) {
      nums.splice(i, 1);
      i--;
    }
    Y--;
    i++;
  }
  console.log(nums);
}
oddArray();

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray() {
  let x = 0;
  let avg;
  var nums = [1, 2, 3, 8, 9];
  for (let i = 0; i < nums.length; i++) {
    x = x + nums[i];
  }
  avg = x / nums.length;
  console.log(avg);
}
aveArray();

function aveArray() {
  let x = 0;
  let avg;
  let i = 0;
  var nums = [1, 2, 3, 8, 9];
  Y = nums.length;
  while (Y > 0) {
    x = x + nums[i];
    Y--;
    i++;
  }
  avg = x / nums.length;
  console.log(avg);
}
aveArray();

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray() {
  var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  var x = strings[0];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length < x.length) {
      x = strings[i];
    }
  }
  console.log(x);
}
shorterInArray();

function shorterInArray() {
  var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  var x = strings[0];
  Y = strings.length;
  let i = 0;
  while (Y > 0) {
    if (strings[i].length < x.length) {
      x = strings[i];
    }
    Y--;
    i++;
  }
  console.log(x);
}
shorterInArray();
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, cahr) {
  let x = 0;
  for (let i = 0; i < string.length; i++) {
    if (str[i] === cahr) {
      x++;
    }
  }
  console.log(x);
}
var string = "alex mercer madrasa rashed2 emad hala";
repeatChar(string, "a");

function repeatChar(str, cahr) {
  let x = 0;
  let y = string.length;
  let i = 0;
  while (y > 0) {
    if (str[i] === cahr) {
      x++;
    }
    i++;
    y--;
  }
  console.log(x);
}
var string = "alex mercer madrasa rashed2 emad hala";
repeatChar(string, "a");

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength() {
  let x = 0;
  var strings = ["alex", "mercer", "rashed2", "emad", "hala"];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length % 2 != 0 && i % 2 === 0) {
      x = strings[i];
      break;
    }
  }
  console.log(x);
}
evenIndexOddLength();

function evenIndexOddLength() {
  let x = 0;
  var strings = ["alex", "mercer", "rashed2", "emad", "hala"];
  let y = strings.length;
  let i = 0;
  while (y > 0) {
    if (strings[i].length % 2 != 0 && i % 2 === 0) {
      x = strings[i];
      break;
    }
    i++;
    y--;
  }
  console.log(x);
}
evenIndexOddLength();
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex() {
  var nums = [44, 5, 4, 3, 2, 10];
  var nums2 = [];
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    x = nums[i] ** i;
    nums2.push(x);
  }
  console.log(nums2);
}
powerElementIndex();

function powerElementIndex() {
  var nums = [44, 5, 4, 3, 2, 10];
  var nums2 = [];
  let x = 0;
  Y = nums.length;
  let i = 0;
  while (Y > 0) {
    x = nums[i] ** i;
    nums2.push(x);
    i++;
    Y--;
  }
  console.log(nums2);
}
powerElementIndex();
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex() {
  var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  var nums2 = [];
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && i % 2 === 0) {
      x = nums[i];
      nums2.push(x);
    }
  }
  console.log(nums2);
}
evenNumberEvenIndex();

function evenNumberEvenIndex() {
  var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  var nums2 = [];
  let x = 0;
  let Y = nums.length;
  let i = 0;
  while (Y > 0) {
    if (nums[i] % 2 === 0 && i % 2 === 0) {
      x = nums[i];
      nums2.push(x);
    }
    i++;
    Y--;
  }
  console.log(nums2);
}
evenNumberEvenIndex();
