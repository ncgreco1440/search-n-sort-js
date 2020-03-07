function BubbleSort(container) {
  let pos, scan, temp;
  
  for (pos = container.length - 1; pos >= 0; pos--) {
    for (scan = 0; scan <= pos - 1; scan++) {
      if (container[scan].compareTo(container[scan + 1]) > 0) {
        temp = container[scan];
        container[scan] = container[scan + 1];
        container[scan + 1] = temp;
      }
    }
  }
}

module.exports = BubbleSort;