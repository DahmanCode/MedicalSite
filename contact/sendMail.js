
// ===== Form Validation ===== //

const form = document.getElementById('form');
const fullName = document.getElementById("fullName");
const emailId = document.getElementById("emailId");
const message = document.getElementById("message");

const submit = document.querySelector('.submit');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
	const fullNameValue = fullName.value.trim();
	const emailIdValue = emailId.value.trim();
	const messageValue = message.value.trim();
  
  // submit.onclick = valid()
  // function valid () {
    
    if (isEmail(emailIdValue) == true && fullNameValue !== '' && messageValue !== '') {
      
      sendMail();
      // let inputs = document.querySelectorAll('input, textarea');
      // let btn = document.querySelector('button');

      // btn.addEventListener('click', () => {
      //   inputs.forEach(input => input.value = "");
      // });

      // setTimeout(function() {
      //   btn.addEventListener('click', window.onload())
      // }, 500)

      // window.onload = function() {
      //   console.log("Window Loaded");
      // }
      // window.onload;
  }
    
  if(fullNameValue === '') {
    setErrorFor(fullName, 'fullName is required');
	} else {
    setSuccessFor(fullName);
	}
  
  if(emailIdValue === '') {
    setErrorFor(emailId, 'Email is required');
  } else if (!isEmail(emailIdValue)) {
    setErrorFor(emailId, 'Not a valid email');
  } else {
    setSuccessFor(emailId);
  }

	if(messageValue === '') {
		setErrorFor(message, 'message is required');
	} else {
		setSuccessFor(message);
	}
  
    function sendMail() {
      var params = {
        full_name : document.getElementById("fullName").value,
        email_id : document.getElementById("emailId").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
      }
      emailjs.send("service_s7qlc7g", "template_tkp4jdf", params)
      .then((res) => {
          document.getElementById("fullName").value = "";
          document.getElementById("emailId").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          const formControl1 = fullName.parentElement;
          formControl1.className = 'form-control';
          const formControl2 = emailId.parentElement;
          formControl2.className = 'form-control';
          const formControl3 = message.parentElement;
          formControl3.className = 'form-control';
          console.log(res);
          alert("Your message sent successfully");
        })
        .catch((err) => console.log(err));
    }
  
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

  
    