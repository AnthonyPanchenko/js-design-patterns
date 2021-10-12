// The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state.

class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super('red');
  }

  action() {
    return 'Stop';
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow');
  }

  action() {
    return 'Ready';
  }
}

class GreenLight extends Light {
  constructor() {
    super('green');
  }

  action() {
    return 'Go!';
  }
}

class TrafficLight {
  constructor() {
    this.states = [new RedLight(), new YellowLight(), new GreenLight()];
    this.current = this.states[0];
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex((light) => light === this.current);

    if (index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }

  action() {
    return this.current.action();
  }
}

const traffic = new TrafficLight();
console.log(traffic.action());
traffic.change();

console.log(traffic.action());
traffic.change();

console.log(traffic.action());
traffic.change();

console.log(traffic.action());
traffic.change();

console.log(traffic.action());
traffic.change();

console.log(traffic.action());
traffic.change();
