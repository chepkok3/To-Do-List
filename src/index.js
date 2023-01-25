// eslint-disable-next-line
import _ from 'lodash';
import './style.css';

import { list, SaveItem } from './modules/addRemoveItems.js';
import listItems from './modules/createNewItems.js';

const listForm = document.querySelector('#todo-form');
const taskList = document.querySelector('.task-list');
const taskCompleteButton = document.querySelector('#delete-tasks');
const addItem = document.querySelector('#list-input');

listForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const itemSaved = new SaveItem();
  itemSaved.addNew(addItem.value);
  listForm.reset();
});

for (let i = 1; i <= list.length; i += 1) {
  list.forEach((x) => {
    if (x.index === i) {
      listItems(x);
    }
  });
}

// clear all completed fields
taskCompleteButton.addEventListener('click', () => {
  let todos = list.filter((element) => element.completed === false);

  // to update the index
  let i = 1;
  todos = todos.map((element) => {
    element.index = i;
    i += 1;
    return element;
  });
  taskList.innerHTML = '';
  todos.forEach((listItem, index) => {
    listItems(listItem, index + 1);
  });
  localStorage.setItem('list', JSON.stringify(todos));
});
