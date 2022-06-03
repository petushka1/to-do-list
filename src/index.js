import './style.css';
import {remove, select} from './app.js'

import dots from './dots.svg';
import checked from './checked.svg';

import enter from './enter.svg';
import refresh from './refresh.svg';

window.addEventListener('DOMContentLoaded', loadContent);

function loadContent() {
const list = document.querySelector('.list');
console.log(list);
const btn = document.getElementById('btn');
const refreshIcon = document.getElementById('refreshIcon');
const enterIcon = document.getElementById('enterIcon');

refreshIcon.src = refresh;
enterIcon.src = enter;

list.innerHTML = '';
let taskArr =[];

const input = document.querySelector('#yourTask');
let storedArr = 'to-do-list';

if (localStorage.length > 0) {
  storedArr = localStorage.getItem("storedArr");
  taskArr = JSON.parse(storedArr);
}

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
console.log(taskArr);

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

storedArr = localStorage.getItem("storedArr");
let listItems = "";

const populate = (arr) => {
  arr.forEach((item) => {
    listItems += `<li id='${item.index}' class="item"><label><input type="checkbox"><input class="edit" placeholder='${item.description}'></input></label><img src='${dots}'></li>`;
  });
  list.innerHTML = listItems;
};
if (storedArr !== null) {
  populate(JSON.parse(storedArr));
}
}
document.body.addEventListener('click', select);
