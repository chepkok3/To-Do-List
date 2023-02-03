/**
 * @jest-environment jsdom
 */

import { list, ItemSaved } from './addremove.js';
// eslint-disable-next-line import/named
import { LocalStorageMock } from './mocks/localStorage.js';
// import { mockLocalStorage } from './src/tests/__mock__/localStorage.js';
import itemsList from './createitems.js';
import { itemCheck, clearTodos } from './checkbox.js';

document.body.innerHTML = `
   <form action="#" id="add-form">
   <input
     type="text"
     id="add-item"
     name="add-item"
     placeholder="Add to your list..."
   /><i class="fa fa-arrow-turn-down"></i>
   </form>
   <ul class="task-list"></ul>
   <div id="btn">
      <button type="button" id="clear-btn">clear all completed</button>
    </div>`;

global.localStorage = LocalStorageMock;
const savedTask = new ItemSaved('description', false, 1);

describe('updating item completed status', () => {
  test('test item completed status', () => {
    savedTask.newItem('drive a car');
    savedTask.newItem('brush your teeth');
    savedTask.newItem('start coding');

    const itemOne = document.querySelectorAll(
      '.task-list li input[type=text]',
    )[0];
    const itemTwo = document.querySelectorAll(
      '.task-list li input[type=text]',
    )[1];
    const itemThree = document.querySelectorAll(
      '.task-list li input[type=text]',
    )[2];

    itemCheck(list[0], itemOne, list);
    itemCheck(list[2], itemThree, list);

    const itemOneStyle = itemOne.style.textDecoration;
    const itemTwoStyle = itemTwo.style.textDecoration;
    const itemThreeStyle = itemThree.style.textDecoration;

    expect(itemOneStyle).toBe('line-through');
    expect(itemTwoStyle).toBe('');
    expect(itemThreeStyle).toBe('line-through');
  });
});

describe('Clear all completed status', () => {
  test('Clear all completed tasks', () => {
    const taskList = document.querySelector('.task-list');

    clearTodos(list, taskList, itemsList);
    const dolist = document.querySelectorAll('.task-list li');

    expect(dolist).toHaveLength(1);
  });
});
