
import * as everything from './app.js';
export function loadCheckboxFunctionality() {

let taskArr = [];

  if (localStorage.length > 0) {
    const temp = localStorage.getItem('storedArr');
    if (temp) taskArr = JSON.parse(temp);
  }

  const checkboxes = document.body.querySelectorAll('input[type=checkbox]');
  const btn = document.getElementById('btn');

  // btn.addEventListener('click', clearCompleted);


  taskArr.forEach((item, i) => {
    if (item.completed === true) {
      let li = document.getElementById(`${i}`);
      li.querySelector('input[type=checkbox]').checked = true;
    }
  });

  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', taskCompleted);
      return checkbox
  });

  function taskCompleted(e) {
    let taskCompletedLi = e.target.parentElement.parentElement;
    const index = parseInt(taskCompletedLi.id, 10);

    if (e.target.checked) {
      taskArr[index].completed = true;
    } else {
      taskArr[index].completed = false;
    }
    localStorage.setItem("storedArr", JSON.stringify(taskArr));
    }



/*
  function clearCompleted() {

    let notCompleted = taskArr.filter((task) => task.completed == false);

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked === true) {
          let checkboxParent = checkbox.parentElement.parentElement;
          checkboxParent.remove()
        }
    });
    rearange(notCompleted);
  }

  function rearange(arr) {
    arr.forEach((item, i) => {
      let index = parseInt(item.index, 10);
      item.index = i;
      document.getElementById(`${index}`).id = i;

    });

    localStorage.setItem("storedArr", JSON.stringify(arr));
  }

*/

  }
