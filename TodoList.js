const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2024-6-12',
},
{
  name:'wash dishes',
  dueDate: '2024-7-12'
}];

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {

    const { name, dueDate} = todoObject;
    const html = `
    <p>
      ${name} ${dueDate}
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button>
    </p>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';
  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}