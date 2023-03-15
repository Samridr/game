const wrapper = document.querySelector('.wrapper');

const btnPopup = document.querySelector('.imgbtn');
const iconeClose = document.querySelector('.name-field__close');



btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active');
}
)

iconeClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
}
)