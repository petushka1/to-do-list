/*eslint-env es6*/
export default function loadCheckboxFunctionality() {



  let taskArr = JSON.parse(localStorage.getItem('storedArr'));

  const checkboxes = document.body.querySelectorAll('input[type=checkbox]');
  const btn = document.getElementById('btn');

  function store() {
    localStorage.setItem("storedArr", JSON.stringify(taskArr));
  }



  taskArr.forEach((item, i) => {
    let li = document.getElementById(`${i}`);
    if (item.completed === true) {
      li.querySelector('input[type=checkbox]').checked = true;
    }
  });



  function taskCompleted(e) {
    let taskCompletedLi = e.target.parentElement.parentElement;
    const index = parseInt(taskCompletedLi.id, 10);

    if (e.target.checked) {
      taskArr[index].completed = true;
    } else {
      taskArr[index].completed = false;
    }
    store();
  }

  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', taskCompleted);
  });

  function rearange() {
    taskArr.forEach((item, i) => {
      let index = parseInt(item.index, 10);

      document.getElementById(`${index}`).id = i;
      item.index = i;
    });
    store()
    location.reload()
  }

  function clearCompleted() {
    taskArr = taskArr.filter((task) => task.completed === false);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        let checkboxParent = checkbox.parentElement.parentElement;
        checkboxParent.remove();
      }
    });

    rearange();
  }

  btn.addEventListener('click', clearCompleted);
}
