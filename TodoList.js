const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();
displayPendingTasks();


function renderTodoList() {
  todoHtml = "";
  todoList.forEach((todoItems, index) => {

    const name = todoItems.name;
    const checked = todoItems.checked ? 'checked' : '';
    const html = `
      <div class="todo-item">    
        <div class="todo-item-content">
          <input type="checkbox" id="check-${index}" class="todo-checkbox js-todo-checkbox" ${checked}/>
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
      displayPendingTasks();
      renderTodoList();
    })
  })

  document.querySelectorAll('.js-todo-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      todoList[index].checked = checkbox.checked;
      console.log(todoList);
      saveToStorage();
      displayPendingTasks();
    })
  })

  document.querySelector('.clear-todo').addEventListener('click', () => {
    todoList.splice(0, todoList.length)
    saveToStorage();
    displayPendingTasks();
    renderTodoList();
  })
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  if (!name) {
    alert('Please enter todo')
    
  } else {
    todoList.push({ name, checked: false});

    inputElement.value = '';
    renderTodoList();
    displayPendingTasks();
    saveToStorage();
  }
  
}

function displayPendingTasks () {
  const pendingTasks = todoList.filter(todo => !todo.checked).length;
  const html = `You have ${pendingTasks} pending task`
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





