/*
Model-View-Presenter. MVP is focused on improving the presentation logic.

---------the difference between MVP and MVC------------
In the MVC pattern, the controller acts as the mediator between the model and the view, and it can 
share multiple views. The view can also communicate directly with the model by observing it for changes and updating itself accordingly.
*/

class Model {
  constructor(text) {
    this.text = text;
  }
  setText(text) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
}

class View {
  constructor() {
    this.presenter = null;
  }

  registerWith(presenter) {
    this.presenter = presenter;
  }

  displayError() {
    console.log('Text is not in upper case');
  }

  displayMessage(text) {
    console.log('The text is: ' + text);
  }

  changeText(text) {
    this.presenter.changeText(text);
  }
}

class Presenter {
  constructor(view) {
    this.view = view;
    this.model = null;
  }

  setModel(model) {
    this.model = model;
  }

  getView() {
    return this.view;
  }

  changeText(text) {
    if (text !== text.toUpperCase()) {
      this.view.displayError();
    } else {
      this.model.setText(text);
      this.view.displayMessage(this.model.getText());
    }
  }
}

var model = new Model('Hello world!');
var view = new View();
var presenter = new Presenter(view);
presenter.setModel(model);
view.registerWith(presenter);
presenter.getView().changeText('WWWWW');
presenter.getView().changeText('QQQQQQ');
