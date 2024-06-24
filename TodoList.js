const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  todoHtml = '';
  todoList.forEach((todoItems, index) => {
  
    const name = todoItems;
    const html = `
      <div class="todo-item">    
        <div class="todo-item-content">
          <input type="checkbox" id="check-${index}" class="todo-checkbox"/>
          <label for="check-${index}" class="todo-label">${name}</label>
        </div>
        
        <span class="fa-solid fa-trash js-delete-todo"></span>
      </div>
    `;

    todoHtml += html;
  })

  document.querySelector('.js-todo-list').innerHTML = todoHtml;

  if (todoList.length === 0) {
    document.querySelector('.js-todo-list').innerHTML = `<p>No new Task</p>`
  }
  

  document.querySelectorAll('.js-delete-todo').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      saveToStorage();
      renderTodoList();
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



