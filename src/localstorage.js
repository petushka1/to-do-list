export let taskArr = [];
  const temp = localStorage.getItem('storedArr');
  if (temp) taskArr = JSON.parse(temp);


export function setLocalStorage() {
    localStorage.setItem("storedArr", JSON.stringify(taskArr));
  }
