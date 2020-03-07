let iterations = {
  num: 0
};

/**
 * Binary Search using an iterative method.
 */
function binarySearch(array, target) {
  let left = 0;                         // point to the first element in the array
  let right = array.length - 1;         // point to the last element in the array
  let mid;

  while (left <= right) {
    iterations.num++;
    mid = Math.floor((left + right) / 2); // Other languages you *may* leverage truncation so the Math.floor() is unnecessary

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}

/**
 * Binary Search using a recursive method.
 * @param {*} array 
 * @param {*} target 
 * @param {*} left 
 * @param {*} right 
 */
function recursiveBinarySearch(array, target, left, right) {
  const mid = Math.floor((left + right) / 2); // Other languages you *may* leverage truncation so the Math.floor() is unnecessary
  iterations.num++;

  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
    return recursiveBinarySearch(array, target, left, mid - 1);
  } else if (target > array[mid]) {
    return recursiveBinarySearch(array, target, mid + 1, right);
  }

  return -1;
}

/**
 * Test application
 */
let a = [];
// for (let i = 0; i < 2000000; i++) {
//   a.push(Math.floor(Math.random() * 1000000 - (-1000000) + -1000000));
// }

for (let i = 0; i <= 200; i++) {
  if (i != 101) {
    a.push(i);
  }
}

console.log('Searching array for a number between 0 and 2 billion');

if (process.argv[2] > 2000000000) {
  console.error('Number input was too large');
}

if (process.argv[2] < 0) {
  console.error('Number input was too small');
}

// console.log(`${process.argv[2]} was in position: ${recursiveBinarySearch(a, Number(process.argv[2]), 0, a.length - 1)}\n
// and took ${iterations.num} iterations to complete the search`);

function solution(A) {
  A.sort((a, b) => {
    // return -n, 0, or n
    // n meaning a > b; 0 meaning a = b; -n meaning a < b
    return a - b;
  });
  const max = A[A.length - 1];

  for (let i = 1; i < max; i++) {
    if (binarySearch(A, i) === -1) {
      return i;
    }
  }
}

console.log(`The smallest Positive Integer missing from the array is: ${solution(a)}\n
this took ${iterations.num} iterations to complete the search`);