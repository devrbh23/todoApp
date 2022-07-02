var currentTime = new Date();
document.getElementById("datetime").innerHTML =
  currentTime.toLocaleDateString();

var btnn = document.getElementById("btn");
var inputs = document.getElementById("todo");

btnn.addEventListener("click", function (e) {
  inputs.classList.toggle("hide");
  btnn.classList.toggle("hide");
});
var todolist = document.getElementById("todo-list");
var button = document.getElementById("btn2");
var todoList = [];

function myFunction(item, index) {
  todolist.innerHTML = "";
}

button.addEventListener("click", function (e) {
  var input = document.getElementById("inputus").value;
  document.getElementById("inputus").value = "";
  if (input === "") {
    alert("do some task");
  } else {
    todoList.push({ name: input, completed: false });
  }
  todolist.innerHTML = "";
  todoList.forEach(myFunction);
});

var input = document.getElementById("inputus");
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    document.getElementById("btn2").click();
  }
});

todolist.addEventListener("click", function (e) {
  todoList[event.target.value].completed =
    !todoList[event.target.value].completed;
  todolist.innerHTML = "";
  todoList.forEach(myFunction);
});
