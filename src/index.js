import './style.css';
import { taskArr } from './localstorage.js';
import { loadTaskManager, addTask, populate, remove } from './app.js';
import { clearCompleted } from './extend.js';


if (localStorage.length > 0) {
  populate();
}


/*
window.addEventListener('DOMContentLoaded', () => {

});
*/

/*
export function setLocalStorage() {
  localStorage.setItem("storedArr", JSON.stringify(taskArr));
}
*/
