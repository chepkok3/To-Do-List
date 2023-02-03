/**
 * @jest-environment jsdom
 */

import { ItemSaved } from './addremove.js';
// eslint-disable-next-line import/named
import { LocalStorageMock } from './mocks/localStorage.js';

document.body.innerHTML = `
 <form action="#" id="add-form">
 <input
   type="text"
   id="add-item"
   name="add-item"
   placeholder="Add to your list..."
 /><i class="fa fa-arrow-turn-down"></i>
 </form>
 <ul class="task-list"></ul>`;

global.localStorage = LocalStorageMock;
const savedTask = new ItemSaved('description', false, 1);

describe('Editing tasks', () => {
  test('edit first task', () => {
    savedTask.newItem('drive a car');

    savedTask.editItem(1, 'go swimming');
    const taskOne = document.querySelectorAll(
      '.task-list li input[type=text]',
    )[0].value;
    expect(taskOne).toBe('');
  });

  test('edit second task', () => {
    savedTask.newItem('brush your teeth');

    savedTask.editItem(2, 'take breakfast');
    const taskTwo = document.querySelectorAll(
      '.task-list li input[type=text]',
    )[1].value;
    expect(taskTwo).toBe('');
  });

  test('edit third task', () => {
    savedTask.newItem('go to work');

    savedTask.editItem(3, 'start coding');
    const taskTwo = document.querySelectorAll(
      '.task-list li input[type=text]',
    )[2].value;
    expect(taskTwo).toBe('');
  });
});
