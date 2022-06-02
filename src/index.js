import './style.css';
// import './app.js'

import dots from './dots.svg';
import checked from './checked.svg';
import bin from './remove.svg';
import enter from './enter.svg';
import refresh from './refresh.svg';

window.addEventListener('DOMContentLoaded', () => {
const list = document.querySelector('.list');
const btn = document.getElementById('btn');
const refreshIcon = document.getElementById('refreshIcon');
const enterIcon = document.getElementById('enterIcon');

refreshIcon.src = refresh;
enterIcon.src = enter;



list.innerHTML = '';
let taskArr =[];

const input = document.querySelector('#yourTask');

function makeTaskElement({description}) {
  const li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = `<label><input type="checkbox"><input class="edit" placeholder='${description}'></input></label><img src='${dots}'>`;
  return li
}

function addTask(description) {
  const newTask = {
    index: taskArr.length + 1,
    description: description,
    completed: false,
  };
  taskArr.push(newTask);
  localStorage.setItem("storedArr", JSON.stringify(taskArr));
  const newListItem = makeTaskElement(newTask);
  newListItem.id = newTask.index;
  list.appendChild(newListItem);
}

input.onkeypress = function(e) {
  if (e.keyCode === 13 && e.target.value != '') {
    e.preventDefault();
    let value = input.value;
    addTask(value);
    e.target.value = "";
  }
}

document.body.addEventListener('keypress', (e) => {
if (e.target.classList.contains('edit')) {
  if (e.keyCode === 13 && e.target.value != '') {
    e.preventDefault();
    let value = e.target.value;
    e.target.placeholder = value;
    e.target.value = '';
    }
  }
});

let listItems = "";
const populate = (arr) => {
  arr.forEach((item, i) => {
    listItems += `<li class="item"><label><input type="checkbox"><input class="edit" placeholder='${description}'></input></label><img src='${dots}'></li>`;
  });
  list.innerHTML = listItems;
};
// populate(JSON.parse(localStorage.getItem('storedArr')));
populate(taskArr);
});

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    const checkElement = document.body.querySelector('.active');
    if (checkElement != null) {
      checkElement.classList.remove('active');
      const tempImg = checkElement.lastChild;
      tempImg.src = dots;
    }
    //document.body.getElementByClassName('active').classList.remove('active');
    const current = e.target;
    current.classList.toggle('active');
    const tempImg = current.lastChild;
    tempImg.src = bin;

    tempImg.onclick = function(f) {
    const index = f.target.parentNode.id;
    // taskArr.slice(index, 1);
    f.target.parentNode.remove();
}
  }
});
