/**
 * Performs a selection sort on the given container
 * @param {*} container 
 */
function SelectionSort(container) {
  let min = 0;
  let temp;

  // start at the very first element in the container and progressively loop over until we reach the last element.
  for (let i = 0; i < container.length - 1; i++) {
    // cache the current value we are looking at. By default this will serve as our "minimum"
    // only to be changed as needed while we perform our nested loop.
    min = i;
    // Starting at the next element, loop over the elements in the container.
    for (let scan = i + 1; scan < container.length; scan++) {
      // Run the object's implemented compareTo method, if -1 is returned 
      // then the scanned object's index should become the new min.
      // In all other cases "greater than" or "equal to", do nothing
      if (container[scan].compareTo(container[min]) < 0) {
        min = scan;
      }
    }
    // We have now found the index of the smallest object in the container
    // perform an index swap with our current location in the outer loop.
    temp = container[min];
    container[min] = container[i];
    container[i] = temp;
  }
}

module.exports = SelectionSort;