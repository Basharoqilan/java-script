/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(
  number_of_children,
  partner_name,
  geographic_location,
  job_title
) {
  console.log(
    `You will be a ${job_title} in ${geographic_location} and married to ${partner_name} with ${number_of_children} kids`
  );
}
tellFortune("3", "Alice", "Jordan", "software engineer");
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(your_puppy_age) {
  console.log(`Your doggie is ${your_puppy_age} years old in dog years!`);
}
let x = prompt("your_puppy_age");
var y = x * 7;
calculateDogAge(y);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amount_per_day) {
  if (age < 100) {
    var y = 100 - age;
    var z = amount_per_day * 365 * y;
    console.log(`You will need ${z} to last you until the ripe old age of 100`);
  }
}
var a = prompt("Enter your age ");
var amount = prompt("How much money do you use per day?");
calculateSupply(a, amount);

/*

4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("bashar");
/*
5
what is the error:
function double(cat) {       
  return 2 * x;
}

function double(7) {      
  return 2 * 7;
}

function double('7') {        
  return 2 * 'x';
}
*/
/*---------error (x)--------------*/
function double(cat) {
  return 2 * cat;
}
console.log(double(12));

/*---------- error (7)------------*/
function double(X) {
  return 2 * X;
}
console.log(double(7));

/*---------- error (7 and x)------------*/
function double(x) {
  return 2 * x;
}
console.log(double(7));
/*
6
fix these functions:

func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x;
}
console.log(double1(x));
/*----------------------*/

function double2(x) {
  return 2 * x;
}
console.log(double2(x));
/*----------------------*/
function double3(x) {
  return 2 * x;
}
console.log(double3(x));
/*----------------------*/

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num) {
  var x = num * num * num;
  console.log(x);
}
cube(5);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2) {
  var x = num1 * num2;
  console.log(x);
}
multiply(5, 6);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function anIGetADrivingLicense(age) {
  if (age >= 20) {
    console.log("yes you can");
  } else {
    let x = 20 - age;
    console.log(`please come back after ${x} years to get one`);
  }
}
var y = prompt("inter your age");
anIGetADrivingLicense(y);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
var a = prompt("inter the name");
var b = prompt("inter the name");
function sameLength(name1, name2) {
  if (name1.length == name2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
sameLength(a, b);
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
var a = Number(prompt("inter the num1"));
var b = Number(prompt("inter the num2"));
largerNubmer(a, b);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1, num2, num3) {
  if (num1 > num2 && num2 < num3) {
    console.log(num2);
  } else if (num1 < num2 && num1 < num3) {
    console.log(num1);
  } else if (num3 < num2 && num3 < num1) {
    console.log(num3);
  }
}
var X = Number(prompt("inter the first number"));
var Y = Number(prompt("inter the second number"));
var Z = Number(prompt("inter the third number"));
smallerNubmer(X, Y, Z);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(X, Y, Z, W, I) {
  if (
    X.length <= Y.length &&
    X.length <= Z.length &&
    X.length <= W.length &&
    X.length <= I.length
  ) {
    console.log(X);
  } else if (
    Y.length <= X.length &&
    Y.length <= Z.length &&
    Y.length <= W.length &&
    Y.length <= I.length
  ) {
    console.log(Y);
  } else if (
    Z.length <= X.length &&
    Z.length <= Y.length &&
    Z.length <= W.length &&
    Z.length <= I.length
  ) {
    console.log(Z);
  } else if (
    W.length <= X.length &&
    W.length <= Z.length &&
    W.length <= Y.length &&
    W.length <= I.length
  ) {
    console.log(W);
  } else if (
    I.length <= X.length &&
    I.length <= Z.length &&
    I.length <= W.length &&
    I.length <= Y.length
  ) {
    console.log(I);
  }
}
var x1 = prompt("inter the name1");
var x2 = prompt("inter the name2");
var x3 = prompt("inter the name3");
var x4 = prompt("inter the name4");
var x5 = prompt("inter the name5");

shorterString(x1, x2, x3, x4, x5);
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(X, Y, Z, W) {
  if (X.length >= Y.length && X.length >= Z.length && X.length >= W.length) {
    console.log(X);
  } else if (
    Y.length >= X.length &&
    Y.length >= Z.length &&
    Y.length >= W.length
  ) {
    console.log(Y);
  } else if (
    Z.length >= X.length &&
    Z.length >= Y.length &&
    Z.length >= W.length
  ) {
    console.log(Z);
  } else if (
    W.length >= X.length &&
    W.length >= Z.length &&
    W.length >= Y.length
  ) {
    console.log(W);
  } else if (
    I.length >= X.length &&
    I.length >= Z.length &&
    I.length >= W.length
  ) {
    console.log(I);
  }
}
var x1 = prompt("inter the name1");
var x2 = prompt("inter the name2");
var x3 = prompt("inter the name3");
var x4 = prompt("inter the name4");
longerString(x1, x2, x3, x4);
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
  if (num % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
var X = Number(prompt("inter the number"));
isEven(X);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
  if (num % 2 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}
var X = Number(prompt("inter the number"));
isOdd(X);
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
  if (num < 0) {
    num = num * -1;
    console.log(num);
  } else {
    console.log(num);
  }
}
var I = Number(prompt("inter the number"));
positive(I);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
var X = prompt("inter the first name");
var Y = prompt("inter the last name");
fullName(X, Y);
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(num1, num2, num3, num4, num5) {
  var avg = (num1 + num2 + num3 + num4 + num5) / 5;
}
var X = Number(prompt("inter the first number"));
var Y = Number(prompt("inter the second number"));
var Z = Number(prompt("inter the third number"));
var W = Number(prompt("inter the fourth number"));
var I = Number(prompt("inter the Fifth number"));
average(X, Y, Z, W, I);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  console.log(Math.random());
}
randomNumber();
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min, max) {
  console.log(Math.random() * (max - min) + min);
}
var X = Number(prompt("inter the first number"));
var Y = Number(prompt("inter the second number"));
randomBetweenNumbers(X, Y);
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(num) {
  if (num >= 0 && num <= 49) {
    console.log(`F`);
  } else if (num >= 50 && num <= 69) {
    console.log(`D`);
  } else if (num >= 70 && num <= 84) {
    console.log(`C`);
  } else if (num >= 85 && num <= 94) {
    console.log(`B`);
  } else if (num >= 95 && num <= 100) {
    console.log(`A`);
  }
}
var X = Number(prompt("inter the number between 0 and 100"));
scoreInUniversty(X);
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var X = 0;

function counter() {
  return (X = X + 1);
}
console.log(counter());
console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
var X = 0;
function counter() {
  return (X = X + 1);
}

function resetCounter() {
  return `${X} and the counter reset now`;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(resetCounter());
var X = 0;
console.log(counter());
console.log(counter());
console.log(resetCounter());
var X = 0;
console.log(counter());
