/*eslint-disable*/
import { list, SaveItem } from './addRemoveItems.js';
/* eslint-enable */
import check from './checkBox.js';

// create a list of tasks
const listItems = (listItem, id) => {
  const taskList = document.querySelector('.task-list');
  const li = document.createElement('li');
  taskList.appendChild(li);
  const div = document.createElement('div');
  div.classList.add('list-container');
  li.appendChild(div);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-list');
  div.appendChild(checkbox);

  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', listItem.description);
  text.setAttribute('disabled', '');
  div.appendChild(text);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = `
    <i class="fa fa-ellipsis-vertical"></i>`;

  button.addEventListener('click', (event) => {
    const itemParent = event.target.parentNode.parentNode;
    itemParent.querySelector('.fa-trash-can').parentNode.style.display = 'block';
    button.style.display = 'none';
    li.style.background = '#f7ce';
    // text edit
    text.disabled = false;
    text.focus();
  });
  li.appendChild(button);

  // delete button code
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.innerHTML = `
    <i class='fa-solid fa-trash-can'></i>`;
  deleteButton.style.display = 'none';

  deleteButton.id = id;
  deleteButton.addEventListener('click', () => {
    const deleteItem = new SaveItem();
    deleteItem.removeItem(id);
  });
  li.appendChild(deleteButton);

  // ode for editing tasks
  text.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      text.placeholder = text.value;
      button.style.display = 'flex';
      deleteButton.style.display = 'none';
      text.disabled = true;
      li.style.background = 'none';
      const Item = new SaveItem();
      Item.editItem(id, text.value);
    }
  });

  // checkbox event listener
  if (listItem.completed) {
    checkbox.checked = true;
    text.style.textDecoration = 'line-through';
  }
  let x = {};
  list.forEach((element) => {
    if (element.index === listItem.index) {
      x = element;
    }
  });
  checkbox.addEventListener('click', (event) => {
    check(event, x, text, list);
    localStorage.setItem('list', JSON.stringify(list));
  });
};

export default listItems;
