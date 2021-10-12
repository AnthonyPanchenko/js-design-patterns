// The Iterator pattern allows clients to effectively loop over a collection of objects.

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

const iter = new MyIterator(['Q', 'W', 'E', 'R', 'T', 'Y']);

for (const val of iter) {
  console.log('Value: ', val);
}

const iter_2 = iter[Symbol.iterator]();

console.log(iter_2.next());
console.log(iter_2.next());
console.log(iter_2.next());

//==========================  generator  ======================================

function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++];
  }
}

const gen = generator(['Q', 'W', 'E', 'R', 'T', 'Y']);
console.log('generator value: ', gen.next().value);
console.log('generator value: ', gen.next().value);
