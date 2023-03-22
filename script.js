const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelectorAll('.imgbtn');
const iconeClose = document.querySelector('.name-field__close');
const sec = document.querySelector('.principale');
const sec2 = document.querySelector('.principale2');

const valide = document.querySelector('#partie');
const confirm = document.querySelector('.confirm');



btnPopup.forEach(button => button.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    sec.classList.add("dsp-none");
    sec2.classList.add("dsp-none");
    console.log("click");
}
));

iconeClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    sec.classList.remove("dsp-none");
    sec2.classList.remove("dsp-none");
}
);

const form = document.getElementById("inscription");
const prenomInput = document.getElementById("prenom");
const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const dateNaissInput = document.getElementById("dateNaiss");
const nbrPartInput = document.getElementById("nbrPart");

const prenomError = document.getElementById("prenom-error");
const nomError = document.getElementById("nom-error");
const emailError = document.getElementById("email-error");
const dateNaissError = document.getElementById("dateNaiss-error");
const nbrPartError = document.getElementById("nbrPart-error");
const cityRadios = form.querySelectorAll('input[name="city"]');
const cityError = document.querySelector('#city-error');
const conditionsCheckbox = form.querySelector('input[name="conditions"]');
const conditionsError = document.querySelector('#condition-error');


form.addEventListener("submit", function(event) {
  event.preventDefault();

  let formIsValid = true;

  // Validate prenom
  if (prenomInput.value.trim() === "") {
    prenomError.textContent = "Le prénom est obligatoire";
    prenomError.classList.add("error-message");
    formIsValid = false;
  } else if (prenomInput.value.trim().length < 3) {
    prenomError.textContent = "Le prénom doit avoir plus de 3 caractères";
    prenomError.classList.add("error-message");
    formIsValid = false;
  } else if (/\d/.test(prenomInput.value)) {
    prenomError.textContent = "Le prénom ne doit pas contenir de chiffre";
    prenomError.classList.add("error-message");
    formIsValid = false;
  } else {
    prenomError.textContent = "Champ valide";
    prenomError.classList.add("correct");
    prenomError.classList.remove("error-message");
  }
  

  // Validate nom
  if (nomInput.value.trim() === "") {
    nomError.textContent = "Le nom est obligatoire";
    nomError.classList.add("error-message");
    formIsValid = false;
  } else if (nomInput.value.trim().length < 3) {
    nomError.textContent = "Le nom doit avoir plus de 3 caractères";
    nomError.classList.add("error-message");
    formIsValid = false;
  } else if (/\d/.test(nomInput.value)) {
    nomError.textContent = "Le nom ne doit pas contenir de chiffre";
    nomError.classList.add("error-message");
    formIsValid = false;
  }
  else {
    nomError.textContent = "Champ valide";
    nomError.classList.add("correct");
    nomError.classList.remove("error-message");
  }

  //Validate email
  // Regex to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value.trim())) {
emailError.textContent = "Veuillez saisir une adresse email valide";
emailError.classList.add("error-message");
formIsValid = false;
}else {
  emailError.textContent = "Champ valide";
  emailError.classList.add("correct");
  emailError.classList.remove("error-message");
}

// Validate dateNaiss
if (dateNaissInput.value.trim() === "") {
    dateNaissError.textContent = "La date de naissance est obligatoire";
    dateNaissError.classList.add("error-message");
    formIsValid = false;
  }else {
    dateNaissError.textContent = "Champ valide";
    dateNaissError.classList.add("correct");
    dateNaissError.classList.remove("error-message");
  }
  
  // Validate nbrPart
  if (nbrPartInput.value.trim() === "" || nbrPartInput.value < 0) {
    nbrPartError.textContent = "Le nombre de tournoi est obligatoire et doit être supérieur ou égal à 0";
    nbrPartError.classList.add("error-message");
    formIsValid = false;
  }else {
    nbrPartError.textContent = "Champ valide";
    nbrPartError.classList.add("correct");
    nbrPartError.classList.remove("error-message");
  }

  
  // Valider la sélection de la ville
  let selectedCity = false;
  for (let radio of cityRadios) {
    if (radio.checked) {
      selectedCity = true;
      break;
    }
  }
  if (!selectedCity) {
    cityError.textContent = 'Veuillez sélectionner au moins une ville.';
    cityError.classList.add("error-message");
    formIsValid = false;
  } else {
    cityError.textContent = "Champ valide";
    cityError.classList.add("correct");
    cityError.classList.remove("error-message");
  }

  if (!conditionsCheckbox.checked) {
    conditionsError.textContent = 'Veuillez accepter les conditions d\'utilisation.';
    conditionsError.classList.add("error-message");
    formIsValid = false;
  } else {
    conditionsError.textContent = "Champ valide";
    conditionsError.classList.add("correct");
    conditionsError.classList.remove("error-message");
  }

  console.log(formIsValid);
 if(formIsValid === true){
    wrapper.classList.remove('active');
    confirm.classList.add('dsp-flex');
    confirm.classList.remove('dsp-none');
    // Reset error messages
  prenomError.textContent = "";
  nomError.textContent = "";
  emailError.textContent = "";
  dateNaissError.textContent = "";
  nbrPartError.textContent = "";
   }


});

