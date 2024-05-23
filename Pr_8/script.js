let todos = [];

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

function newTodo() {
  const taskName = prompt('Введіть нову справу:');
  if (taskName) {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    todos.push(newTask);
    saveTodos();
    render();
    updateCounter();
  }
}

function renderTodo(todo) {
  return `
    <li class="list-group-item">
      <input type="checkbox" class="form-check-input me-2" id="${todo.id}" ${todo.completed ? 'checked' : ''} onClick="checkTodo(${todo.id})" />
      <label for="${todo.id}">
        <span class="${todo.completed ? 'text-success text-decoration-line-through' : ''}">${todo.name}</span>
      </label>
      <button class="btn btn-danger btn-sm float-end" onClick="deleteTodo(${todo.id})">delete</button>
    </li>
  `;
}

function render() {
  const todoList = todos.map(todo => renderTodo(todo)).join('');
  list.innerHTML = todoList;
}

function updateCounter() {
  const total = todos.length;
  const unchecked = todos.filter(todo => !todo.completed).length;
  itemCountSpan.textContent = total;
  uncheckedCountSpan.textContent = unchecked;
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  render();
  updateCounter();
}

function checkTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    render();
    updateCounter();
  }
}

window.onload = function() {
  loadTodos();
  render();
  updateCounter();
}
