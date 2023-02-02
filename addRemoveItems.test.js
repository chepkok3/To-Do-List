/**
 * @jest-environment jsdom
 */

import { ItemSaved } from './src/modules/addRemoveItems.js';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('ItemSaved class', () => {
//   beforeEach(() => {
//     const list = [];
//     list.length = 0;
//   });

  test('adds a new item to the list', () => {
    const item = new ItemSaved();
    item.newItem('Test item', false);
    const list = JSON.parse(localStorage.getItem('list')) || [];
    expect(list).toHaveLength(1);
    // expect(list[0].description).toEqual('Test item');
  });
});
