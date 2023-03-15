const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.imgbtn');
const iconeClose = document.querySelector('.name-field__close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active');
}
);

iconeClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
}
);

document.getElementById("inscription").addEventListener("submit", function(e){

    var erreur;
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var dateNaiss = document.getElementById("dateNaiss");
    var nbrPart = document.getElementById("nbrPart");

    if(!nbrPart.value){
        erreur="Veuillez renseigner votre nombre de participation";
    }

    if(!dateNaiss.value){
        erreur="Veuillez renseigner votre date de naissance";
    }

    if(!email.value){
        erreur="Veuillez renseigner votre email";
    }

    if(!nom.value){
        erreur="Veuillez renseigner votre nom";
    }

    if(!prenom.value){
        erreur="Veuillez renseigner votre prenom";
    }

    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else{
        alert('Validé!');
    }

})