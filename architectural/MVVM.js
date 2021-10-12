/*
The MVVM pattern stands for Model-View-ViewModel pattern. It is based on the MVC and MVP patterns discussed 
in the previous lessons. It is used to further separate the working of the user interface from the business logic in the application.

Let’s look at the components in the MVVM pattern.

Model: As in the MVC and MVP patterns, the model stores all the data and information required by the application. 
As you know, the model does not interfere with how this data will be manipulated or displayed.

View: The view displays the information on the interface; it can also accept user input hence contains behavior. 
In the MVVM pattern, the views aren’t passive. Passive views are manipulated by the controller or presenter; 
they are responsible for displaying the information without having any knowledge of the model. However, in MVVM,
 views are active. They contain data-bindings, behavior, and events that require the knowledge of model and viewmodel.
  The view handles its events; it doesn’t depend on the viewmodel entirely; however, it does not maintain its state,
   for that it syncs up with the viewmodel.

ViewModel: Similar to the controller in the MVC, the ViewModel acts as the connection between the model and the view. 
It converts information from the model format into the view format for display. For example, the model might have a 
date stored in Unix format, whereas the view might display it in another format. Here the ViewModel will help in 
converting the information. It also updates the model when a user action on the view occurs; hence, it is used to
 pass commands from view to the model. It is also used to maintain the view’s state and trigger events on it.
*/

//MODEL
class Model {
  constructor() {
    this.model = { name: 'Stuart' };
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notifyObservers(attrName, newVal) {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i](attrName, newVal);
    }
  }
  getCurrentName(nameKey) {
    console.log(this.model[nameKey]);
    return this.model[nameKey];
  }

  setNameValue(nameKey, value) {
    this.model[nameKey] = value;
    this.notifyObservers(nameKey, value);
  }
}

//VIEWMODEL
class ViewModel {
  constructor(model) {
    this.bind = function (viewElement, modelElement) {
      viewElement.value = model.getCurrentName(modelElement);
      model.subscribe(function (attrName, newValue) {
        document.getElementsByName(attrName).forEach(function (elem) {
          elem.value = newValue.toUpperCase();
        });
      });
      viewElement.addEventListener('input', function () {
        model.setNameValue(viewElement.name, viewElement.value);
      });
    };
  }
}

//VIEW
var nameInput = document.getElementById('name');
var nameCopy = document.getElementById('nameCopy');
var model = new Model();
var viewModel = new ViewModel(model);
viewModel.bind(nameInput, 'name');
viewModel.bind(nameCopy, 'name');
