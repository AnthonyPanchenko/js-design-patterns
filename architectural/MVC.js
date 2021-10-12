/*
The MVC pattern stands for Model-View-Controller pattern. It is an architectural pattern that is used to organize the code 
of your application. It consists of three components:

Model:

The model component manages the data that the application may require.

View:

The view is used for the visual representation of the current model. It renders data on the user’s side.

Controller:

The controller connects the model and the view components.

The model is independent of the view; meaning, it is not concerned with the user interface and how the information 
is displayed on the user side. The view, on the other hand, is an observer of the model. Whenever the model gets 
modified (data is updated) it notifies its observer (the view) which then reacts accordingly.

As mentioned view is the visual representation of the model. Whenever it is notified of a change in the model, 
the view updates accordingly. As the view layer is what the users get to see, this is also the layer they get to
 interact with such as editing or updating attribute values.

The controller is the connection between the model and the view. The two do not interact with each other directly. 
The controller takes input from the user such as a click or keypress which updates the view side and then updates the
model accordingly. It can sometimes update the view directly as well.
 */

class EmployeeModel {
  constructor(name, designation, id) {
    this.name = name;
    this.designation = designation;
    this.id = id;
  }

  getDesignation() {
    return this.designation;
  }
  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

class EmployeeView {
  constructor() {
    this.controller = null;
  }
  registerWith(controller) {
    this.controller = controller;
    this.controller.addView(this);
  }

  printEmployeeInfo(name, designation, id) {
    console.log(
      `Employee info:\nName is: ${name}\nID is: ${id}\nDesignation is: ${designation}`
    );
  }
  hire(name, designation) {
    this.controller.hire(name, designation);
  }
  editName(id, name) {
    this.controller.setEmployeeName(id, name);
  }
}

class EmployeeController {
  constructor() {
    this.model = null;
    this.view = null;
    this.empList = [];
  }

  addView(view) {
    this.view = view;
  }
  addModel(model) {
    this.model = model;
  }
  setEmployeeName(id, name) {
    if (this.empList[id]) {
      this.empList[id].name = name;
      this.updateView();
    } else {
      console.log('Incorrect id');
    }
  }

  updateView() {
    console.log('List of employees:');

    for (let i in this.empList)
      this.view.printEmployeeInfo(
        this.empList[i].getName(),
        this.empList[i].getDesignation(),
        this.empList[i].getID()
      );
    console.log('\n');
  }
  hire(name, designation) {
    this.empList.push(
      new EmployeeModel(name, designation, this.empList.length)
    );
    this.updateView();
  }
}
var view = new EmployeeView();
var controller = new EmployeeController();
view.registerWith(controller);
console.log('Hiring a new employee Rachel');
view.hire('Rachel', 'Team Lead');
console.log('Hiring a new employee Jack');
view.hire('Jack', 'Software Engineer');
console.log('Updating the name of employee with id 0');
view.editName(0, 'Monica');
console.log('Updating the name of an employee with id 7');
view.editName(7, 'Joey');
