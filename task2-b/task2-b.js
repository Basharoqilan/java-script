// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
var i = 1;
while (i < 10) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
var x = prompt("inter the number");
for (let i = 1; i <= 10; i++) {
  num = i * x;
  console.log(num);
}
// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let i = 1;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  console.log(sum);
  i++;
}
``;
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let num = 1;
for (let i = prompt("inter the number"); i > 0; i--) {
  num = num * i;
}
console.log(num);
// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
let x = prompt("inter the number");
let y = 0;
let z = 1;
var j = 1;
while (j <= x) {
  let sum = y + z;
  y = z;
  z = sum;
  console.log(sum);
  j++;
}
// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
let x = 20;
while (x >= 5) {
  console.log(x);
  x = x - 5;
}
