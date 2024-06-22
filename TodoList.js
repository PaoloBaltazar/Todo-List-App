todoList = [];

function renderTodoList() {
  todoList.forEach((todoItems) => {
    todoListHTML = '';

    const name = todoItems;
    const html = `
      <div>
        <p>${name}</p>
        <button>Delete</button>
      </div>
    `;

    todoListHTML += html;

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;


  })
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  renderTodoList();
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});