let toggles = document.getElementsByClassName('toggle');
let content = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');
let wrappers = document.getElementsByClassName('wrapper');

// active first toggle and showing ther content by default

content[0].style.height = content[0].scrollHeight + "px";
toggles[0].style.color = "#00bfa6";
icons[0].classList.remove('fa-plus');
icons[0].classList.add('fa-minus');
toggles[0].classList.add('active');

// active and disactive toggles

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
  first.classList.remove('active');
  second.classList.remove('active');
  therd.classList.remove('active');
}

secondBtn.onclick = () => {
  first.classList.add('active');
  second.classList.add('active');
  therd.classList.remove('active');
}

therdBtn.onclick = () => {
  first.classList.add('active');
  second.classList.remove('active');
  therd.classList.add('active');
}