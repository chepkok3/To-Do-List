const itemCheck = (e, itemList, text, list) => {
  list[itemList.index - 1].completed = !itemList.completed;
  if (itemList.completed) {
    text.style.textDecoration = 'line-through';
  } else {
    text.style.textDecoration = 'none';
  }
};

export default itemCheck;
