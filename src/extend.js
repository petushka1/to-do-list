import { taskArr } from './localstorage.js';
import { rearange, list, isListempty } from './app.js';

// Milstone 3tr
// variables declaration
const btn = document.getElementById('btn');





// functionality
// change event status



/*
if (isListempty()) {
taskArr.forEach((item, i) => {
  if (item.completed === true) {
    let li = document.getElementById(`${i}`);
    li.querySelector('input[type=checkbox]').checked = true;
  }
});
}
*/
// add text decoration for completed tasks
export function taskCompleted(target) {
  //if (isListempty()) {
//  getTaskArray();
  let taskCompletedLi = target.parentElement.parentElement;
  const index = parseInt(taskCompletedLi.id, 10);

  if (target.checked) {
    taskArr[index].completed = true;
    target.nextElementSibling.style['text-decoration'] = 'line-through';
  } else {
    taskArr[index].completed = false;
    target.nextElementSibling.style['text-decoration'] = 'none';
  }
//}
// setLocalStorage();
localStorage.setItem("storedArr", JSON.stringify(taskArr));
}

// clear all completed tasks on button click
export function clearCompleted() {
  taskArr = taskArr.filter((task) => task.completed === false);

  document.body.querySelectorAll(':checked').forEach(({parentElement}) => {
    const parent = parentElement.parentElement;
    parent.remove();
  });

  rearange();
//  setLocalStorage()
  localStorage.setItem("storedArr", JSON.stringify(taskArr));
}

// assign event listeners
document.body.addEventListener('change', ({target}) => {
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    taskCompleted(target);
  }
});

btn.addEventListener('click', clearCompleted);

/* export function loadCheckboxFunctionality() {

  let taskArr = [];

  function getTaskArray() {
    const tasks = localStorage.getItem('storedArr');
    if (tasks) taskArr = JSON.parse(tasks);
  }

  getTaskArray();

  const btn = document.getElementById('btn');

  btn.addEventListener('click', clearCompleted);

  taskArr.forEach((item, i) => {
    if (item.completed === true) {
      let li = document.getElementById(`${i}`);
      li.querySelector('input[type=checkbox]').checked = true;
    }
  });

  document.body.addEventListener('change', ({target}) => {
    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      taskCompleted(target);
    }
  });

  function taskCompleted(target) {
    getTaskArray();

    let taskCompletedLi = target.parentElement.parentElement;
    const index = parseInt(taskCompletedLi.id, 10);

    if (target.checked) {
      taskArr[index].completed = true;
	  target.nextElementSibling.style['text-decoration'] = 'line-through';
    } else {
      taskArr[index].completed = false;
	  target.nextElementSibling.style['text-decoration'] = 'none';
    }

    localStorage.setItem("storedArr", JSON.stringify(taskArr));
  }

  function clearCompleted() {
    taskArr = taskArr.filter((task) => task.completed === false);

    document.body.querySelectorAll(':checked').forEach(({parentElement}) => {
      const parent = parentElement.parentElement;
      parent.remove();
    });

    rearange();
  }

  function rearange() {
    taskArr.forEach((item, i) => {
      let index = parseInt(item.index, 10);
      document.getElementById(`${index}`).id = i;
      item.index = i;
    });
    localStorage.setItem("storedArr", JSON.stringify(taskArr));
  }

}
*/
