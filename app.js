//==============================================================================

// First create an empty object. The entire app will be stored in this object.
// In doing this this we will only have one global variable which is good beacuse
// scripts elswhere could overite some of our variables by accident

var TODO_LIST = {};

TODO_LIST.todos = [] // Create an empty array to store out todos

// NOTE: you could also write

// var TODO_LIST {
//   todos: []
// }

// Create a method to show our todos
TODO_LIST.showTodos = function() {
  var todos = this.todos;
  // the `this` keyword will alwas point to an object
  // What object it points to depends on what object was used to call

  // Check if there is anything todo
  if (todos.length === 0) {

    console.log("You have nothing todo.");

  } else {

    for (var i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    }

  }

}

TODO_LIST.addTodo = function(todo) {

  this.todos.push(todo);
  // todos.push is an array methos that add an items to the end of the array
  console.log("You added an item");

}

TODO_LIST.removeTodo = function(index) {
  var todos = this.todos;

  for (var i = 0; i < todos.length; i++) {
    if (i === index) {
      todos.splice(i, 1)
      // This removes an item from an array
      // The first paramater says what index you want to start splicing from
      // and the second one says how many items you want to remove
    }
  }

}

//==============================================================================


// Now to interact with this app open up the console

// Add an item
TODO_LIST.addTodo("get bread");


// Show items
TODO_LIST.showTodos();
