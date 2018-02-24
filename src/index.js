class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = function (a, b) {
      return (a - b);
    };
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort(function (a, b) {
      return (a - b);
    });

    var arrOfTemp = []; // временный массив

    for (let i = 0; i < indices.length; i++) {
      arrOfTemp.push(this.arr[indices[i]]); // формируем массив по индексам
    }

    arrOfTemp.sort(this.compareFunction); // сортируем временный массив согласно параметру сортировки - compareFunction

    for (let i = 0; i < arrOfTemp.length; i++) {
      this.arr[indices[i]] = arrOfTemp[i]; // выводим свой массив в порядке отсортированного
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
