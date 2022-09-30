const signinBtn = document.querySelector('.signinBtn')
const signupBtn = document.querySelector('.signupBtn')
const formBx = document.querySelector('.formBx')
const body = document.querySelector('body')

signupBtn.onclick = function () {
  formBx.classList.add('active')
  body.classList.add('active')
}

signinBtn.onclick = function () {
  formBx.classList.remove('active')
  body.classList.remove('active')
}

// Storage Data

let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

localStorage.setItem("user", "dahman");
localStorage.setItem("pass", "415263");

let user = localStorage.getItem("user");
let pass = localStorage.getItem("pass");

let message = document.querySelector(".message");

submit.addEventListener('click', () => {
  if (user == txtuser.value  && pass == txtpass.value) {
    message.innerHTML = "Login Successfull !";
    message.style.color = "#00ff20";
  }
  else {
    message.innerHTML = "Username or Password is invalid !";
    message.style.color = "#ff1502";
  }
})

// function saveData() {
//   let txtuser = document.querySelector('.txtuser').value
//   let txtpass = document.querySelector('.txtpass').value

//   localStorage.setItem('name', txtuser)
//   localStorage.setItem('pass', txtpass)
// }
