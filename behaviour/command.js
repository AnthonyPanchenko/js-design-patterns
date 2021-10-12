// The command pattern allows encapsulation of the requests or operations into separate objects.
// It decouples the objects that send requests from the objects responsible for executing those requests.
// Creation of a structure in which the sender class and the receiver class do not directly depend on each other.
// Organizing a callback to a class that includes the sender class.
/*
Receiver:
  knows how to execute the command;
Command:
  declares the interface for executing an operation;
Concrete Command:
  defines the binding between the Receiver and the action to execute;
  invokes methods on the Receiver to fulfill the request;
Client
  creates the Concrete Command and sets its Receiver;
Invoker
  issues the request to execute the command;
*/

// Concrete Command
class OpenAlertCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.alert('Hello world!');
  }
}

// Receiver
class Window {
  alert(message) {
    window.alert(message);
  }
}

// Invoker
class Button {
  constructor(label, command) {
    this.label = label;
    this.command = command;
    this.node = document.createElement('button');

    this.build();
  }

  build() {
    this.node.innerText = this.label;
    this.node.onclick = () => this.onClickHandler();
  }

  onClickHandler() {
    this.command.execute();
  }
}

// Client
class Application {
  constructor(node) {
    this.node = node;
  }

  init() {
    const receiver = new Window();
    const command = new OpenAlertCommand(receiver);
    const button = new Button('Submit', command);

    this.node.appendChild(button.node);
  }
}
