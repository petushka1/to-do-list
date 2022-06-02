import './style.css';

import dots from './dots.svg';
import checked from './checked.svg';
import remove from './remove.svg';
import enter from './enter.svg';
import refresh from './refresh.svg';

const taskArr = [
  {
    index: 0,
    description: 'stand-up meeting',
    completed: false,
  },
  {
    index: 1,
    description: 'write CV and CL',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete Project Milestone 1',
    completed: true,
  },
];

const list = document.querySelector('.list');
const btn = document.getElementById('btn');
const refreshIcon = document.getElementById('refreshIcon');
const enterIcon = document.getElementById('enterIcon');

refreshIcon.src = refresh;
enterIcon.src = enter;

let listItems = "";
const populate = (arr) => {
  arr.forEach((item) => {
    listItems += `<li><label><input type="checkbox"><span>${item.description}</span></label><img src=${dots}></li>`;
  });
  list.innerHTML = listItems;
};

populate(taskArr);
