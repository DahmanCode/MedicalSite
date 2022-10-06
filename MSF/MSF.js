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

let txtuser = document.querySelector('.txtuser')
let txtpass = document.querySelector('.txtpass')
let submit = document.querySelector('.submit')

localStorage.setItem('user', 'dahman')
localStorage.setItem('pass', '415263')

let user = localStorage.getItem('user')
let pass = localStorage.getItem('pass')

let message = document.querySelector('.message')

submit.addEventListener('click', () => {
  if (user == txtuser.value && pass == txtpass.value) {
    message.innerHTML = 'Login Successfull !'
    message.style.color = '#00ff20'
  } else {
    message.innerHTML = 'Username or Password is invalid !'
    message.style.color = '#ff1502'
  }
})

// function saveData() {
//   let txtuser = document.querySelector('.txtuser').value
//   let txtpass = document.querySelector('.txtpass').value

//   localStorage.setItem('name', txtuser)
//   localStorage.setItem('pass', txtpass)
// }

// ===== Insertion Of Element Into The PDF ===== //

function showPDF() {
  var form_name = document.querySelector('.name').value
  var form_lastname = document.querySelector('.lastname').value
  var form_tel = document.querySelector('.tel').value
  var form_address = document.querySelector('.address').value
  var form_place = document.querySelector('.place').value
  var form_date = document.querySelector('.date').value
  var form_addressP = document.querySelector('.addressP').value
  var form_cnie = document.querySelector('.cnie').value
  var form_activites = document.querySelector('.activites').value
  var form_OActivites = document.querySelector('.OActivites').value
  var form_semister = document.querySelector('.semister').value
  var form_filiere = document.querySelector('.filiere').value

  // var send = document.getElementById('#send')

  // send.onclick = () => {
  //   body.classList.add('active')
  // }

  body.innerHTML = `
    <div class="container_pdf">
      <div class="pdf" id="pdf">
        <div class="logo">
          <img src="../../images/ispitsg.png" alt="" />
          <p>Students<span> Activites</span><br> Office <span>ISPITSG</span></p>
        </div>
        <h1>Graduation you are now membership in office activite students.</h1>
        <div class="elelments">
          <p>nom: <strong>${form_name}</strong></p>
          <p>prenom: <strong>${form_lastname}</strong></p>
          <p>telephone: <strong>${form_tel}</strong></p>
          <p>Email address: <strong>${form_address}</strong></p>
          <p>lieu de naissance: <strong>${form_place}</strong></p>
          <p>Date de naissance: <strong>${form_date}</strong></p>
          <p>adresse postale: <strong>${form_addressP}</strong></p>
          <p>CNIE: <strong>${form_cnie}</strong></p>
          <p>quelle sont les activites que vous aimez? <strong>${form_activites}</strong></p>
          <p>si cliquez sur autre: <strong>${form_OActivites}</strong></p>
          <p>votre semister: <strong>${form_semister}</strong></p>
          <p>votre filiere: <strong>${form_filiere}</strong></p>
        </div>
      </div>
      <div class="pdfBtn">
        <button class="submit btn" onclick="generatePDF()">download PDF</button>
        <a href="MSF.html" class="btn">generate another PDF</a>
      </div>
    </div>
`
 
}

function generatePDF() {
  var name_file = prompt("Name of file PDF: ");

  var pdf = document.getElementById("pdf");
  var opt = {
    margin: 1,
    filename: `${name_file}.pdf`,
    image: { type: 'pdf', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }
  html2pdf().set(opt).from(pdf).save();
}