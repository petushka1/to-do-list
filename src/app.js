import bin from './remove.svg';
import dots from './dots.svg';



function select(e) {
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

    tempImg.addEventListener('click', remove);
  }
}

function remove(tempImg) {
  const tempArr = JSON.parse(localStorage.getItem("storedArr"));
  const li = tempImg.target.parentElement;
  li.remove();
  let index = parseInt(li.id, 10);
  console.log(index);
  tempArr.splice(index, 1);

  for (index; index < tempArr.length; index++) {
    tempArr[index].index = index;
    document.getElementById(`${index+1}`).id = index;
}
  localStorage.setItem("storedArr", JSON.stringify(tempArr));
}

export {remove, select}
