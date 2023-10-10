// const signinBtn = document.querySelector('.signinBtn')
// const signupBtn = document.querySelector('.signupBtn')
// const formBx = document.querySelector('.formBx')

// signupBtn.onclick = function () {
//   formBx.classList.add('active')
//   body.classList.add('active')
// }

// signinBtn.onclick = function () {
//   formBx.classList.remove('active')
//   body.classList.remove('active')
// }
const selectBtn = document.querySelector(".select-btn");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});
  
var valueList = document.getElementById('valueList');
var listArray = [];

var checkboxes = document.querySelectorAll('.checkboxe');
// console.log(checkboxes);

for (var checkbox of checkboxes) {
  checkbox.addEventListener('click', function () {
    if (this.checked == true) {
      listArray.push(this.value);
      valueList.innerHTML = listArray.join(' - ');
    } else {
      listArray = listArray.filter(e => e !== this.value);
      valueList.innerHTML = listArray.join(' - ');
    }
  })
}

// ===== Insertion Of Element Into The PDF ===== //

function showPDF() {
const body = document.querySelector('body')
  var form_name = document.querySelector('#name').value
  var form_lastname = document.querySelector('#lastname').value
  var form_tel = document.querySelector('#tel').value
  var form_address = document.querySelector('#address').value
  var form_place = document.querySelector('#place').value
  var form_date = document.querySelector('#date').value
  var form_cnie = document.querySelector('#cnie').value
  var form_activites = document.querySelector('#activites').value
  var form_OActivites = document.querySelector('#OActivites').value
  var form_semister = document.querySelector('#semister').value
  var form_filiere = document.querySelector('#filiere').value

  
  let objectDate = new Date();
  
  let year = objectDate.getFullYear();
  let month = objectDate.getMonth() + 1;
  let day = objectDate.getDate();
  
  if (day < 10) {
    day = '0' + day
  }
  
  if (month < 10) {
    month = '0' + month
  }
  console.log(month)
  
  let hour = objectDate.getHours();
  let min = objectDate.getMinutes();
  
  console.log(hour, min)

  function called() {
    if (form_activites == 'autre') {
      return `<p>autre: <strong>${form_OActivites}</strong></p>`;
    } else {
      return "";
    }
  }

  body.innerHTML = `
    <div class="container_pdf">
      <div class="pdf" id="pdf">
      <div class="logo">
      <img src="../../images/ispitsg.png" alt="" />
          <p>Students<span> Activites</span><br> Office <span>ISPITSG</span></p>
        </div>
        <div class="photo">
          <span>photo</span>
        </div>
        <h1>Congrats, You are now a member of the Student Activities Office.</h1>
        <div class="elelments">
          <div>
            <p>nom: <strong>${form_name}</strong></p>
            <p>prenom: <strong>${form_lastname}</strong></p>
          </div>
          <div>
            <p>telephone: <strong>${form_tel}</strong></p>
            <p>lieu de naissance: <strong>${form_place}</strong></p>
          </div>
          <p>Email address: <strong>${form_address}</strong></p>
          <p>Date de naissance: <strong>${form_date}</strong></p>
          <p>CNIE: <strong>${form_cnie}</strong></p>
          <p>quelle sont les activites que vous aimez? <strong>${form_activites}</strong></p>
          ${called()}
          <div>
          <p>votre filiere: <strong>${form_filiere}</strong></p>
          <p>votre semister: <strong>${form_semister}</strong></p>
          </div>
          <p>votre club & program: <strong>${listArray}</strong></p>
          <div class="time">
            <span>${year}/${month}/${day} ${hour}:${min}</span>
          </div>
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
  pdf.style.width = '800px';
  pdf.style.height = '1000px';
  var opt = {
    margin: [0, 1],
    filename: `${name_file}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 1
     },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    
  }
  html2pdf().set(opt).from(pdf).save();
}