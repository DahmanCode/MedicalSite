const form = document.getElementById('form');
const username = document.getElementById('name');
const lastname = document.getElementById('lastname');
const tel = document.getElementById('tel');
const email = document.getElementById('address');
const place = document.getElementById('place');
const date = document.getElementById('date');
const cnie = document.getElementById('cnie');
const activitie = document.getElementById('OActivites');
const activities = document.getElementById('activites');

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
	const cnieValue = cnie.value.trim();
	const activitieValue = activitie.value.trim();
	const activitiesValue = activities.value.trim();

  submit.onclick = valid()
  function valid () {

    if (cnieValue !== '' && isEmail(emailValue) == true && dateValue !== '' && placeValue !== '' && telValue !== '' && lastnameValue !== '' && usernameValue !== '') {
      send.classList.remove('show')
    } else {
      send.classList.add('show')
    }
  }
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username is required');
	} else {
		setSuccessFor(username);
	}

	if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname is required');
	} else {
		setSuccessFor(lastname);
	}

	if(telValue === '') {
		setErrorFor(tel, 'Telephone is required');
	} else if (telValue.length !== 10) {
    setErrorFor(tel, 'incomplete number');
  }else {
		setSuccessFor(tel);
	}
  
  if(emailValue === '') {
    setErrorFor(email, 'Email is required');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

	if(placeValue === '') {
		setErrorFor(place, 'Place of birth is required');
	} else {
		setSuccessFor(place);
	}

	if(dateValue === '') {
		setErrorFor(date, 'Date of Birth is required');
	} else {
		setSuccessFor(date);
	}


	if(cnieValue === '') {
		setErrorFor(cnie, 'CNIE is required');
	} else {
		setSuccessFor(cnie);
	}

  if (activitiesValue == 'autre') {

    if(activitieValue === '') {
      setErrorFor(activitie, 'This field is required');
    } else{
      setSuccessFor(activitie);
    }
  } else{
    const formControl = activitie.parentElement;
    formControl.className = 'form-control';
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


// var form = document.getElementById("form");
// var values = [];
// form.addEventListener('submit', e () => {
// 	e.preventDefault();
// 	var checkBox = document.getElementsByName('languages');
// 	for (var i = 0; i < checkBox.length; i++) {
// 		if (checkBox[i].checked == true) {
// 			values.push(checkBox[i].value);
// 		}
// 	}
// 	alert('The value(s): ' + values.toString())
// })


// const selectBtn = document.querySelector(".select-btn");

// selectBtn.addEventListener("click", () => {
// 	selectBtn.classList.toggle("open");
// });

// var valueList = document.getElementById('valueList');
// var listArray = [];

// var checkboxes = document.querySelectorAll('.checkboxe');
// console.log(checkboxes);

// for (var checkbox of checkboxes) {
// 	checkbox.addEventListener('click', function () {
// 		if (this.checked == true) {
// 			listArray.push(this.value);
// 			valueList.innerHTML = listArray.join(' - ');
// 		} else {
// 			listArray = listArray.filter(e => e !== this.value);
// 			valueList.innerHTML = listArray.join(' - ');
// 		}
// 	})
// }