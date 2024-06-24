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
          <label for="check-${index}" class="todo-label">
            ${name}
          </label>
        </div>
        
        <span class="fa-solid fa-trash-can js-delete-todo"></span>
      </div>
    `;

    todoHtml += html;
  })

  document.querySelector('.js-todo-list').innerHTML = todoHtml;
  
  document.querySelectorAll('.js-delete-todo').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      saveToStorage();
      displayTodoQuantity();
      renderTodoList();
    })
  })

  document.querySelector('.clear-todo').addEventListener('click', () => {
    todoList.splice(0, todoList.length)
    saveToStorage();
    displayTodoQuantity();
    renderTodoList();
  })
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  if (!name) {
    alert('Please enter todo')
    
  } else {
    todoList.push(name);

    inputElement.value = '';
    renderTodoList();
    displayTodoQuantity();
    saveToStorage();
  }
  
}

function displayTodoQuantity () {
  const todoQuantity = todoList.length
  html = `${todoQuantity} items`
  document.querySelector('.js-todo-quantity').innerHTML = html;
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});



document.body.addEventListener('keydown' , (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
})



