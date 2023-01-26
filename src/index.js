// eslint-disable-next-line
import _ from 'lodash';
import './style.css';

import { list, ItemSaved } from './modules/addRemoveItems.js';
import itemsList from './modules/createNewItems.js';

const listForm = document.querySelector('#todo-form');
const taskList = document.querySelector('.task-list');
const taskCompleteButton = document.querySelector('#delete-tasks');
const addTask = document.querySelector('#list-input');

for (let i = 1; i <= list.length; i += 1) {
  list.forEach((lis) => {
    if (lis.index === i) {
      itemsList(lis);
    }
  });
}

// clear all completed tasks
taskCompleteButton.addEventListener('click', () => {
  let dolist = list.filter((element) => element.completed === false);

  // code for updating index
  let i = 1;
  dolist = dolist.map((element) => {
    element.index = i;
    i += 1;
    return element;
  });
  taskList.innerHTML = '';
  dolist.forEach((itemList, index) => {
    itemList(itemList, index + 1);
  });
  localStorage.setItem('list', JSON.stringify(dolist));
});

listForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const savedTask = new ItemSaved();
  savedTask.newItem(addTask.value);
  listForm.reset();
});
