/**
 * @jest-environment jsdom
 */

import { ItemSaved } from '../modules/addRemoveItems.js';

describe('ItemSaved class', () => {
  test('adds a new item to the list', () => {
    const item = new ItemSaved();
    item.newItem('Test item', false);
    const list = JSON.parse(localStorage.getItem('list')) || [];
    expect(list).toHaveLength(1);
  });

  test('removes an item from the list', () => {
    const item = new ItemSaved();
    item.newItem('Test item', false);
    item.removeTask(2, false);
    const list = JSON.parse(localStorage.getItem('list')) || [];
    expect(list).toHaveLength(1);
  });
});
