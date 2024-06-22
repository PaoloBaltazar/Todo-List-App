const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  todoHtml = '';
  todoList.forEach((todoItems) => {
  
    const name = todoItems;
    const html = `
      <div class="todo-list-items">
        <p>${name}</p>
        <button class="js-delete-todo">Delete</button>
      </div>
    `;

    todoHtml += html;

    document.querySelector('.js-todo-list').innerHTML = todoHtml;

    document.querySelectorAll('.js-delete-todo').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        saveToStorage();
        renderTodoList();
      })
    })

  })
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);

  inputElement.value = '';
  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});



