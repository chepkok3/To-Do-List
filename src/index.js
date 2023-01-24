// eslint-disable-next-line
import _ from 'lodash';
import './style.css';

const taskList = document.querySelector('.task-list');

const taskArray = [
  {
    description: 'Pray',
    completed: false,
    index: 0,
  },
  {
    description: 'Phsycal exercise',
    completed: false,
    index: 1,
  },
  {
    description: 'Code',
    completed: false,
    index: 2,
  },
];

taskList.innerHTML = `
  <article>
    <h2>Today's todo </h2>
    <iconify-icon icon="bx:refresh"></iconify-icon>
  </article>
  <hr>
  <form>
    <input type="text" id="new-todo" class="no-outline" placeholder="Add to your list">
    <button type="submit" id="add-todo" value><iconify-icon icon="uil:enter"></iconify-icon></button>
  </form>
  <hr>
`;

taskArray.forEach((task) => {
  const toDoTask = document.createElement('li');
  toDoTask.className = 'list-item';
  toDoTask.innerHTML = `
      <div class="list">
        <input type="checkbox">
        <label for="description" class="task-description">${task.description}</label>
        <iconify-icon icon="ph:dots-three-outline-vertical-fill" class="dots"></iconify-icon>
    <hr> 
      </div
      `;

  taskList.appendChild(toDoTask);
});
