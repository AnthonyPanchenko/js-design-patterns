// The facade pattern allows you to hide all the messy logic from the client and only display the clear and easy to use interface to them.
// This allows them to interact with an API easily in a less error-prone way and without accessing the inner workings directly.

class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'service') {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register('11111', 'service', 'not aloved'));
console.log(registry.register('22222', 'product', 'Error'));
