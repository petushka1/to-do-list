import { taskArr, list  } from './index.js';

function makeTaskElement({description}) {
  const li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = `<label><input type="checkbox"><input class="edit" placeholder='${description}'></input></label><img src='${dots}'>`;
  return li
}

function addTask(description) {
  const newTask = {
    index: taskArr.length,
    description: description,
    completed: false,
  };
  taskArr.push(newTask);
  localStorage.setItem("storedArr", JSON.stringify(taskArr));
  const newListItem = makeTaskElement(newTask);
  newListItem.id = taskArr.length;
  list.appendChild(newListItem);
}

export { addTask }
