// collection
const collection = [1, "loukhai", true, 0.12];

// iterator object
function Iterator(items) {
  this.items = items;
  this.index = 0;
}

// implement the next and hasNext method

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++]; //forward
    // return this.items[this.index--]; //backward
  },
};

// test
/*
const iter = new Iterator(collection);
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());
*/

/**
 *
 * new method with ES6
 *
 * */

/*

const array = [1, "hello iterate", { a: "a", b: "b" }, false, 5];

// Get the iterator for the array.
const iterator = array[Symbol.iterator]().next();

// Iterate over the elements of the array using the `for...of` loop.
for (const element of iterator) {
  console.log(element);
}

*/
