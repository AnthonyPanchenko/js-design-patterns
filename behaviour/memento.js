/**
The Memento pattern provides temporary storage as well as restoration of an object. 
The mechanism in which you store the object’s state depends on the required duration of persistence, which may vary.

Originator:
   creates a Memento to store the internal state;
   uses Mementos to restore its state;
Memento:
   stores an immutable snapshot of the internal state of Originator;
   can be accessed only by the Originator;
Caretaker:
   stores Mementos;
   never operates on or read Mementos;
 */

class Memento {
  constructor(value) {
    this.value = value;
  }

  getState() {
    return this.value;
  }
}

class Originator {
  constructor() {
    this.state = null;
  }

  setState(value) {
    return (this.state = new Memento(value));
  }

  getSnapshot() {
    return this.state;
  }

  restore(snapshot) {
    this.state = snapshot;
  }

  currentState() {
    console.log('currentState > ', this.state);
  }
}

class CareTaker {
  constructor(originator) {
    this.redoSnapshots = [];
    this.undoSnapshots = [];
    this.originator = originator;
  }

  add(value) {
    this.redoSnapshots = [];
    this.originator.setState(value);
    const currentSnapshot = this.originator.getSnapshot();
    this.undoSnapshots.push(currentSnapshot);
  }

  undo() {
    const lastSnapshot = this.undoSnapshots.pop();
    this.redoSnapshots.push(lastSnapshot);

    const index =
      this.undoSnapshots.length > 1 ? this.undoSnapshots.length - 1 : 0;
    this.originator.restore(this.undoSnapshots[index]);
  }

  redo() {
    const lastSnapshot = this.redoSnapshots.pop();
    this.undoSnapshots.push(lastSnapshot);
    this.originator.restore(lastSnapshot);
  }
}

const originator = new Originator();
const caretaker = new CareTaker(originator);

caretaker.add('q1111');
originator.currentState(); // q1111
caretaker.add('w2222');
caretaker.add('e3333');
caretaker.add('r4444');
caretaker.add('t5555');
caretaker.add('y6666');
originator.currentState(); // y6666

caretaker.undo();
caretaker.undo();
caretaker.undo();
originator.currentState(); // e3333

caretaker.redo();
caretaker.redo();
originator.currentState(); // r5555
