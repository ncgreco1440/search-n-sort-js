function SelectionSort(container) {
  let min = 0;
  let temp;

  for (let i = 0; i < container.length - 1; i++) {
    min = i;
    for (let scan = i + 1; scan < container.length; scan++) {
      if (container[scan].compareTo(container[min]) < 0) {
        min = scan;
      }
    }
    temp = container[min];
    container[min] = container[i];
    container[i] = temp;
  }
}

module.exports = SelectionSort;