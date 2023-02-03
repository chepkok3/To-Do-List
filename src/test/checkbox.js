const itemCheck = (itemList, text, list) => {
  list[itemList.index - 1].completed = !itemList.completed;
  if (itemList.completed) {
    text.style.textDecoration = 'line-through';
  } else {
    text.style.textDecoration = 'none';
  }
};

// delete all checked/completed todos
const clearTodos = (list, taskList, itemsList) => {
  let dolist = list.filter((element) => element.completed === false);

  // to update the index
  let i = 1;
  dolist = dolist.map((element) => {
    element.index = i;
    i += 1;
    return element;
  });
  taskList.innerHTML = '';
  dolist.forEach((itemList, index) => {
    itemsList(itemList, index + 1);
  });
  localStorage.setItem('list', JSON.stringify(dolist));
};

export { itemCheck, clearTodos };
