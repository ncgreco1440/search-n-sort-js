function InsertionSort(container) {
  for (let i = 1; i < container.length; i++) {
    key = container[i];
    pos = i;

    while (pos > 0 && container[pos - 1].compareTo(key) > 0) {
      container[pos] = container[pos - 1];
      pos--;
    }

    container[pos] = key;
  }
}

module.exports = InsertionSort;