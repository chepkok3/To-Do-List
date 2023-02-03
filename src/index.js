// eslint-disable-next-line
import _ from 'lodash';
import './style.css';

import { list, ItemSaved } from './modules/addRemoveItems.js';
import itemsList from './modules/createNewItems.js';
import { clearTodos } from './test/checkbox.js';

const listForm = document.querySelector('#todo-form');
const taskList = document.querySelector('.task-list');
const taskCompleteButton = document.querySelector('#delete-tasks');
const addTask = document.querySelector('#list-input');

listForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const savedTask = new ItemSaved();
  savedTask.newItem(addTask.value);
  listForm.reset();
});

for (let i = 1; i <= list.length; i += 1) {
  list.forEach((lis) => {
    if (lis.index === i) {
      itemsList(lis);
    }
  });
}

// clear all completed tasks
taskCompleteButton.addEventListener('click', () => {
  clearTodos(list, taskList, itemsList);
});
