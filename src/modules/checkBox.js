const check = (event, listItem, text, list) => {
  list[listItem.index - 1].completed = !listItem.completed;
  if (listItem.completed) {
    text.style.textDecoration = 'none';
  } else {
    text.style.textDecoration = 'none';
  }
};

export default check;
