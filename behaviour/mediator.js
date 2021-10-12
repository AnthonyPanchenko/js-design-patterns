// The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact.

class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const u1 = new User('User_1');
const u2 = new User('User_2');
const u3 = new User('User_3');

const room = new ChatRoom();

room.register(u1);
room.register(u2);
room.register(igor);

u1.send('Hello!', u2);
u2.send('Hi!', u1);
u3.send('How are you?');
