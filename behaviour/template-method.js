// The Template Method pattern provides an outline of a series of steps for an algorithm.
// Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps.
// Abstract "Database" class as template

class Database {
  constructor(url, password, email) {
    this.url = url;
    this.email = email;
    this.password = password;
  }

  connect() {}

  disconnect() {}
}

class SQL extends Database {
  constructor(url, password, email) {
    super(url, password, email);
  }

  connect() {
    console.log(
      'Establish connection to the SQL bd for this user: ',
      this.email
    );
  }

  disconnect() {
    console.log('Disconnect the SQL bd for this user: ', this.email);
  }
}

class MongoDb extends Database {
  constructor(url, password, email) {
    super(url, password, email);
  }

  connect() {
    console.log(
      'Establish connection to the MongoDb bd for this user: ',
      this.email
    );
  }

  disconnect() {
    console.log('Disconnect the MongoDb bd for this user: ', this.email);
  }
}

const u1 = new SQL('sql.db.instance', 'qwerty', 'user_1.sql@gmail.com');
u1.connect();
u1.disconnect();

const u2 = new MongoDb('mongo.db.instance', 'ytrewq', 'user_2.mongo@gmail.com');
u2.connect();
u2.disconnect();
