let toggles = document.getElementsByClassName('toggle');
let content = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');
let wrappers = document.getElementsByClassName('wrapper');

for (let i=0; i<toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(content[i].style.height) != content[i].scrollHeight) {
      content[i].style.height = content[i].scrollHeight + "px";
      toggles[i].style.color = "#00bfa6";
      icons[i].classList.remove('fa-plus');
      icons[i].classList.add('fa-minus');
      toggles[i].classList.add('active');
    }

    else {
      content[i].style.height = "0px";
      toggles[i].style.color = "#192a56";
      icons[i].classList.remove('fa-minus');
      icons[i].classList.add('fa-plus');
      toggles[i].classList.remove('active');
    }

    for (let j=0; j<content.length; j++) {
      if (j !== i) {
      content[j].style.height = "0px";
      toggles[j].style.color = "#192a56";
      icons[j].classList.remove('fa-minus');
      icons[j].classList.add('fa-plus');
      toggles[j].classList.remove('active');
      }
    }
  })
}

const first = document.querySelector('.optionOne');
const second = document.querySelector('.optionTow');
const therd = document.querySelector('.optionThree');
const firstBtn = document.querySelector('.btnOne');
const secondBtn = document.querySelector('.btnTow');
const therdBtn = document.querySelector('.btnThree');

// function display() {
//   document.getElementsByClassName('optionOne')
//   .style.display = "none";

//   document.getElementsByClassName('optionTow')
//   .style.display = "flex";
// }

firstBtn.onclick = () => {
  second.classList.remove('active');
  first.classList.remove('active');
}

secondBtn.onclick = () => {
  second.classList.add('active');
  first.classList.add('active');
}

secondBtn.onclick = () => {
  second.classList.add('active');
  first.classList.add('active');
}