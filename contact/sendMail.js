function sendMail() {
  var params = {
    full_name : document.getElementById("fullNmae").value,
    email_id : document.getElementById("emailId").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_3mk85ij", "template_bzup6lk", params)
  .then(
    function (res) {
      document.getElementById("fullNmae").value = "";
      document.getElementById("emailId").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res.status);
    }
  )
}

let popup = document.getElementById('popup');

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}