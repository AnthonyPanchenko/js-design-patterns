// The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request.

class MathChain {
  constructor(value) {
    this.resultValue = value || 0;
  }

  add(n) {
    this.resultValue += n;
    return this;
  }

  subtract(n) {
    this.resultValue -= n;
    return this;
  }

  result() {
    return this.resultValue;
  }
}

const d = new MathChain(5);
console.log(d.add(12).add(10).add(4).subtract(2).result());

function mathChainFunc(value) {
  let resultValue = value || 0;

  return {
    add: function (n) {
      resultValue += n;
      return this;
    },

    subtract: function (n) {
      resultValue -= n;
      return this;
    },

    result: function () {
      return resultValue;
    },
  };
}

const f = mathChainFunc(5);
console.log(f.add(12).add(10).add(4).subtract(2).result());
