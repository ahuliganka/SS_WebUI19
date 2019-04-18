let Error = {
  status: 'failed',
  reason: [
    'Parameter did not pass to the function ',
    'Please enter an integer number as a value',
    'Please enter an integer number less than 10',
    'No or not enough parameters passed to the function ',
    'Please enter a string value'
  ]
};

// task1.js
console.log('Task 1 \n' + getChessboard(6, 4, '*'));

// task2.js
/*
let envelope1 = {
  id: 1,
  a: 3,
  b: 5
};

let envelope2 = {
  id: 2,
  c: 20,
  d: 40,
};

console.log('\nTask 2 \n' + compareEnvelopes(envelope1, envelope2));
*/

// task4.js
console.log('\nTask 4 \n' + extractPalindrome(5395591));



// task7.js
/*
let context1 = {
  min: 5,
  max: 22
};

let context2 = {
  length: 10
};

console.log('\nTask 7 \n' + chooseFibonacciFunction(context1));
*/