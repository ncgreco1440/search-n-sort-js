function QuickSort(data) {
  _QuickSort(data, 0, data.length - 1);
}

function _QuickSort(data, left, right) {
  if (left >= right) return;

  let pivot = data[Math.floor(left + (right - left) / 2)];
  let index = partition(data, left, right, pivot);
  _QuickSort(data, left, index - 1);
  _QuickSort(data, left, right);
}

function partition(data, left, right, pivot) {
  while (left <= right) {
    while (data[left].compareTo(pivot) < 0) {
      left++;
    }

    while (data[right].compareTo(pivot) > 0) {
      right--;
    }

    if (left < right) {
      _swap(data, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function _swap(data, min, index) {
  const temp = data[min];
  data[min] = data[index];
  data[index] = temp; 
}

module.exports = QuickSort;