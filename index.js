const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

function addTodo(title, description){
  const newTodo = {
    title,
    description,
    complete: false,
  };
  todos.push(newTodo);
}
function removeTodo(index){
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
  }
}
function editTodo(index, newTitle, newDescription){
  if (index >= 0 && index < todos.length) {
    todos[index].title = newTitle || todos[index].title;
    todos[index].description = newDescription || todos[index].description;
  }
}
function markTodoComplete(index){
  if (index >= 0 && index < todos.length) {
    todos[index].complete = true;
  }
}
function displayTodoLength(){
  console.log(`You have ${todos.length} todos`);
}

function displayTodos() {
  todos.forEach((todo, index) => {
    console.log(`Todo ${index + 1}`);
    console.log(`The title of the todo: ${todo.title}`);
    console.log(`The description of the todo: ${todo.description}`);
    console.log(
      `This todo is ${todo.complete ? "complete" : "not complete"}`
    );
  });
}

function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array

  // You will need to call your methods above this comment to edit the todos array
  console.log('Here is a list of your todos:');
  // Print the length of the todos array below this comment
  displayTodoLength();
  displayTodos();
}
  // Print the length of the todos array above this comment
  // Iterare over the todos array and console.log each todo below this comment
  addTodo("Second Todo", "This is the second todo");
  addTodo("Third Todo", "This is the third todo");
  markTodoComplete(1); // Mark "Second Todo" as complete.
  


app();