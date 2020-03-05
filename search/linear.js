/**
 * Time Complexity: O(n)
 */
function linearSearch(array, target) {
  let found = false;
  const max = array.length - 1;
  let index = 0;

  while (!found && index <= max) {
    if (array[index] === target) {
      return index;
    }
    index++;
  }

  return -1; // not found, return -1
}


/**
 * Test application
 */

let a = [];
for (let i = 0; i < 1000000; i++) {
  a.push(i);
}

console.log('Searching array for a number between 0 and 2 billion');

if (process.argv[2] > 2000000000) {
  console.error('Number input was too large');
}

if (process.argv[2] < 0) {
  console.error('Number input was too small');
}

console.log(`${process.argv[2]} was in position: ${linearSearch(a, Number(process.argv[2]))}`);