function _swap(data, min, index) {
  const temp = data[min];
  data[min] = data[index];
  data[index] = temp; 
}

function partition(data, min, max) {
  let mid = Math.floor(min + (max - min) / 2);
  let pivot = data[mid];
  _swap(data, mid, min);

  let left = min;
  let right = max;

  while (left < right) {
    while (left < right && data[left].compareTo(pivot) <= 0) {
      left++;
    }

    while (data[right].compareTo(pivot) > 0) {
      right--;
    }

    if (left < right) {
      _swap(data, left, right);
    }
  }

  _swap(data, min, right);
  return right;
}

function _QuickSort(data, min, max) {
  if (min >= max) {
    return;
  }

  let index = partition(data, min, max);
  _QuickSort(data, min, index - 1);
  _QuickSort(data, index + 1, max);
}

function QuickSort(data) {
  _QuickSort(data, 0, data.length - 1);
}

module.exports = QuickSort;