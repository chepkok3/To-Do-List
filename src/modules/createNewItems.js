/*eslint-disable*/
import { list, ItemSaved } from './addRemoveItems.js';
/* eslint-enable */
import itemCheck from './checkBox.js';

// create a list of tasks
const itemsList = (itemList, id) => {
  const taskList = document.querySelector('.task-list');
  const li = document.createElement('li');
  taskList.appendChild(li);
  const div = document.createElement('div');
  div.classList.add('items-container');
  li.appendChild(div);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-item');
  div.appendChild(checkbox);

  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', itemList.description);
  text.setAttribute('disabled', '');
  div.appendChild(text);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = `
    <i class="fa fa-ellipsis-vertical"></i>`;

  button.addEventListener('click', (e) => {
    const itemParent = e.target.parentNode.parentNode;
    itemParent.querySelector('.fa-trash-can').parentNode.style.display = 'block';
    li.style.background = '#f7ce';
    button.style.display = 'none';
    text.disabled = false;
    text.focus();
  });
  li.appendChild(button);

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.innerHTML = `
    <i class='fa-solid fa-trash-can'></i>`;
  deleteButton.style.display = 'none';

  deleteButton.id = id;
  deleteButton.addEventListener('click', () => {
    const deleteItem = new ItemSaved();
    deleteItem.removeTask(id);
  });
  li.appendChild(deleteButton);

  text.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      text.placeholder = text.value;
      button.style.display = 'flex';
      deleteButton.style.display = 'none';
      text.disabled = true;
      li.style.background = 'none';
      const Item = new ItemSaved();
      Item.editItem(id, text.value);
    }
  });

  if (itemList.completed) {
    checkbox.checked = true;
    text.style.textDecoration = 'line-through';
  }
  let lis = {};
  list.forEach((element) => {
    if (element.index === itemList.index) {
      lis = element;
    }
  });
  checkbox.addEventListener('click', (e) => {
    itemCheck(e, lis, text, list);
    localStorage.setItem('list', JSON.stringify(list));
  });
};

export default itemsList;
