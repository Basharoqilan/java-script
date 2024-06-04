// 1-Write a function to find the largest element in an array.
function largest_element() {
  let myarray = [1, 2, 3, 4];
  if (
    myarray[0] > myarray[1] &&
    myarray[0] > myarray[2] &&
    myarray[0] > myarray[3]
  ) {
    console.log(myarray[0]);
  } else if (
    myarray[1] > myarray[0] &&
    myarray[1] > myarray[2] &&
    myarray[1] > myarray[3]
  ) {
    console.log(myarray[1]);
  } else if (
    myarray[2] > myarray[0] &&
    myarray[2] > myarray[1] &&
    myarray[2] > myarray[3]
  ) {
    console.log(myarray[2]);
  } else {
    console.log(myarray[3]);
  }
}
largest_element();

// 2-Write a function to find the smallest element in an array.
function smallest_element() {
  let myarray = [1, 2, 3, 4];
  if (
    myarray[0] < myarray[1] &&
    myarray[0] < myarray[2] &&
    myarray[0] < myarray[3]
  ) {
    console.log(myarray[0]);
  } else if (
    myarray[1] < myarray[0] &&
    myarray[1] < myarray[2] &&
    myarray[1] < myarray[3]
  ) {
    console.log(myarray[1]);
  } else if (
    myarray[2] < myarray[0] &&
    myarray[2] < myarray[1] &&
    myarray[2] < myarray[3]
  ) {
    console.log(myarray[2]);
  } else {
    console.log(myarray[3]);
  }
}
smallest_element();

// 3-Write a function to find the sum of all elements in an array.
function smallest_element() {
  let myarray = [1, 2, 3, 4];
  var sum = myarray[0] + myarray[1] + myarray[2] + myarray[3];
  console.log(sum);
}
smallest_element();
// 4-Write a function to find the average of all elements in an array.
function average_element() {
  let myarray = [1, 2, 3, 4];
  var avg = (myarray[0] + myarray[1] + myarray[2] + myarray[3]) / 4;
  console.log(avg);
}
average_element();
// 5-Write a function to find the median of all elements in an array.
function median_element() {
  let myarray = [1, 2, 1, 5, 3];
  myarray.sort();
  console.log(myarray);
  var X = (myarray.length + 1) / 2;
  console.log(myarray[X]);
}
median_element();
// 6-Write a function to remove all duplicates from an array.
function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

const myArray = [5, 8, 4, 5, 9, 8, 3];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray);
// 7-Write a function to sort an array in ascending order.
function array() {
  let myarray = [1, 5, 7, 6, 3, 4, 2];
  myarray.sort();
  console.log(myarray);
}
array();
// 8-Write a function to sort an array in descending order.
function myarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const array1 = [5, 8, 4, 5, 1];
const array2 = myarray(array1);
console.log(array2);

// 9-Write a function to shuffle the elements of an array randomly.
function myarray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const myArray1 = [1, 2, 3, 4, 5];
const myarray2 = myarray(myArray1);
console.log(myarray2);
