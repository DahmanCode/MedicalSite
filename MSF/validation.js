const form = document.getElementById('form');
const username = document.getElementById('name');
const lastname = document.getElementById('lastname');
const tel = document.getElementById('tel');
const email = document.getElementById('address');
const place = document.getElementById('place');
const date = document.getElementById('date');
const addressP = document.getElementById('addressP');
const cnie = document.getElementById('cnie');

const submit = document.querySelector('.submit');
const send = document.querySelector('#send');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const lastnameValue = lastname.value.trim();
	const telValue = tel.value.trim();
	const emailValue = email.value.trim();
	const placeValue = place.value.trim();
	const dateValue = date.value.trim();
	const addressPValue = addressP.value.trim();
	const cnieValue = cnie.value.trim();

  submit.onclick = valid()
  function valid () {
  if (cnieValue !== '' && addressPValue !== '' && isEmail(emailValue) == true && dateValue !== '' && placeValue !== '' && lastnameValue !== '' && usernameValue !== '') {
      send.classList.remove('show')
    } else {
      send.classList.add('show')
    }
  }
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname cannot be blank');
	} else {
		setSuccessFor(lastname);
	}

	if(telValue === '') {
		setErrorFor(tel, 'Lastname cannot be blank');
	} else {
		setSuccessFor(tel);
	}
  
  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

	if(placeValue === '') {
		setErrorFor(place, 'Lastname cannot be blank');
	} else {
		setSuccessFor(place);
	}

	if(dateValue === '') {
		setErrorFor(date, 'Lastname cannot be blank');
	} else {
		setSuccessFor(date);
	}

	if(addressPValue === '') {
		setErrorFor(addressP, 'Lastname cannot be blank');
	} else {
		setSuccessFor(addressP);
	}

	if(cnieValue === '') {
		setErrorFor(cnie, 'Lastname cannot be blank');
	} else {
		setSuccessFor(cnie);
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

