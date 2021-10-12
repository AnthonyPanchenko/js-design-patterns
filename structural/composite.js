// The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects.
// Each item in the collection can hold other collections themselves, creating deeply nested structures.
// A tree control is a perfect example of a Composite pattern.

// Component -- In example code: Node
//   declares the interface for objects in the composition
// Leaf -- In example code: Node
//   represents leaf objects in the composition. A leaf has no children
// Composite -- In example code: Node
//   represents branches (or subtrees) in the composition
//   maintains a collection of child components

// Component
class Entity {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  showInfo() {}
}

// Leaf subclass
class File extends Entity {
  constructor(name, size) {
    super(name, size);
  }

  showInfo() {
    console.log(`File: ${this.name}, size: ${this.size}`);
  }
}

// Composite subclass
class Folder extends Entity {
  constructor(name, size) {
    super(name, size);
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    var length = this.children.length;
    for (var i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  }

  getChild(i) {
    return this.children[i];
  }

  hasChildren() {
    return this.children.length > 0;
  }

  showInfo() {
    console.log(
      `Folder: ${this.name}, size: ${this.size}, children: `,
      this.children
    );
  }
}

const root = new Folder('Root', 10);
root.add(new File('File 1', 2));
root.add(new File('File 2', 3));

const subFolder = new Folder('Sub folder', 5);
subFolder.add(new File('File 1_2', 2));
subFolder.add(new File('File 2_2', 3));

root.add(subFolder);

root.showInfo();
