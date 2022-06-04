import dots from './dots.svg';
// import checked from './checked.svg';
import bin from './remove.svg';
import enter from './enter.svg';
import refresh from './refresh.svg';

export default function loadTaskManager() {
  const list = document.querySelector('.list');
  // const btn = document.getElementById('btn');
  const refreshIcon = document.getElementById("refreshIcon");
  const enterIcon = document.getElementById("enterIcon");

  refreshIcon.src = refresh;
  enterIcon.src = enter;

  list.innerHTML = '';
  let taskArr = [];

  const input = document.querySelector('#yourTask');

  if (localStorage.length > 0) {
    const temp = localStorage.getItem('storedArr');
    if (temp) taskArr = JSON.parse(temp);
  }

  function makeTaskElement({ description }) {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `<label><input type="checkbox"><input class="edit" placeholder='${description}'></input></label><img src='${dots}'>`;
    return li;
  }

  function addTask(description) {
    const newTask = {
      index: taskArr.length,
      description,
      completed: false,
    };

    taskArr.push(newTask);
    localStorage.setItem("storedArr", JSON.stringify(taskArr));
    const newListItem = makeTaskElement(newTask);
    newListItem.id = newTask.index;
    list.appendChild(newListItem);
  }

  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && e.target.value !== '') {
      e.preventDefault();
      const { value } = input;
      addTask(value);
      e.target.value = "";
    }
  });

  document.body.addEventListener('keypress', (e) => {
    if (e.target.classList.contains('edit')) {
      if (e.keyCode === 13 && e.target.value !== '') {
        e.preventDefault();
        const { value } = e.target;
        e.target.placeholder = value;
        e.target.value = '';
        const index = parseInt(e.target.parentElement.parentElement.id, 10);
        taskArr[index].description = value;
        localStorage.setItem("storedArr", JSON.stringify(taskArr));
      }
    }
  });

  const populate = () => {
    let listItems = "";

    taskArr.forEach(({ index, description }) => {
      listItems += `
        <li id='${index}' class="item">
          <label>
            <input type="checkbox">
            <input type='text' class="edit" placeholder='${description}'>
          </label>
          <img src='${dots}'>
        </li>
      `;
    });
    list.innerHTML = listItems;
  };

  populate();

  function remove({ target }) {
    const li = target.parentElement;
    li.remove();

    let index = parseInt(li.id, 10);
    taskArr.splice(index, 1);

    for (index; index < taskArr.length; index += 1) {
      taskArr[index].index = index;
      list.children[index].id = index;
    }

    localStorage.setItem("storedArr", JSON.stringify(taskArr));
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
      const checkElement = list.querySelector('.active');

      if (checkElement != null) {
        checkElement.classList.remove('active');
        const [, lastChild] = checkElement.children;
        lastChild.src = dots;
      }

      const current = e.target;
      current.classList.toggle('active');
      const [, lastChild] = current.children;
      lastChild.src = bin;

      if (!lastChild.isBound) {
        lastChild.addEventListener('click', remove);
        lastChild.isBound = true;
      }
    }
  });
}
