// login form
const loginDiv = document.querySelector("#login-div");
const loginInput = document.querySelector("#login-div input");
const helloText = document.querySelector("#hello");

function handleLogin(event) {
  event.preventDefault();
  const id = loginInput.value;
  helloText.innerText = `Welcome, ${id}!`;
  helloText.style.fontSize = "30px";
  loginDiv.classList.add("hidden");
  localStorage.setItem("id", id);
}

loginDiv.addEventListener("submit", handleLogin);

// to do list
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("li-style");
  const span = document.createElement("span");
  span.innerText = "    " + newTodo.text;
  span.style.fontSize = "20px";
  const button = document.createElement("button");
  button.innerText = "◻";
  button.classList.add("no-line");
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
