const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelectorAll('.imgbtn');
const iconeClose = document.querySelector('.name-field__close');
const sec = document.querySelector('.principale');
const sec2 = document.querySelector('.principale2');

const valide = document.querySelector('#partie');
const confirm = document.querySelector('.confirm');

// valide.addEventListener('click', ()=> {
//  let erreur = false;


 
 

// })



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


form.addEventListener("submit", function(event) {
  event.preventDefault();

  let formIsValid = true;

  // Validate prenom
  if (prenomInput.value.trim() === "") {
    prenomError.textContent = "Le prénom est obligatoire";
    prenomError.style.color = "red";
    prenomInput.style.borderColor = "red";
    
    formIsValid = false;
  } else if (prenomInput.value.trim().length < 3) {
    prenomError.textContent = "Le prénom doit avoir plus de 3 caractères";
    prenomError.style.color = "red";
    prenomInput.style.borderColor = "red";
    formIsValid = false;
  } else if (/\d/.test(prenomInput.value)) {
    prenomError.textContent = "Le prénom ne doit pas contenir de chiffre";
    prenomError.style.color = "red";
    prenomInput.style.borderColor = "red";
    formIsValid = false;
  

  }

  // Validate nom
  if (nomInput.value.trim() === "") {
    nomError.textContent = "Le nom est obligatoire";
    nomError.style.color = "red";
    nomInput.style.borderColor = "red";
    formIsValid = false;
  } else if (nomInput.value.trim().length < 3) {
    nomError.textContent = "Le nom doit avoir plus de 3 caractères";
    nomError.style.color = "red";
    nomInput.style.borderColor = "red";
    formIsValid = false;
  } else if (/\d/.test(nomInput.value)) {
    nomError.textContent = "Le nom ne doit pas contenir de chiffre";
    nomError.style.color = "red";
    nomInput.style.borderColor = "red";
    formIsValid = false;
  }

  //Validate email
  // Regex to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value.trim())) {
emailError.textContent = "Veuillez saisir une adresse email valide";
emailError.style.color = "red";
emailInput.style.borderColor = "red";
formIsValid = false;
}

// Validate dateNaiss
if (dateNaissInput.value.trim() === "") {
    dateNaissError.textContent = "La date de naissance est obligatoire";
    dateNaissError.style.color = "red";
    dateNaissInput.style.borderColor = "red";
    formIsValid = false;
  }
  
  // Validate nbrPart
  if (nbrPartInput.value.trim() === "" || nbrPartInput.value < 0) {
    nbrPartError.textContent = "Le nombre de tournoi est obligatoire et doit être supérieur ou égal à 0";
    nbrPartError.style.color = "red";
    nbrPartInput.style.borderColor = "red";
    formIsValid = false;
  }

  
  // Valider la sélection de la ville
  let selectedCity = form.querySelector('input[name="city"]:checked');
  if (!selectedCity) {
    form.querySelector('.name-field__radiobtn').style.borderColor = "red";
    formIsValid = false;
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

