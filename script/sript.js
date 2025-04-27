const buttonOpenReg = document.querySelector(".registration")
const modalWind = document.querySelector(".modal__login")
const modalRegWind = document.querySelector(".modal__register")
const buttonOpenLog = document.querySelector(".login")
const headerClose = document.querySelector("wrap header__wrap")
const crossCloseReg = document.querySelector(".modal__button--img")
let isModalLogOpen = 0;
let isModalRegOpen = 0;


modalWind.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;

`;
modalRegWind.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;

`;

function togglePassword() {
      const input = document.getElementById('password');
      input.type = input.type === 'password' ? 'text' : 'password';
}
 
const closeModal = event => {
    const target = event.target;
    if (target === modalWind || target === crossCloseReg) {
        modalWind.style.visibility = 'hidden';
        modalWind.style.opacity = 0;
        isModalLogOpen = 0
    } else if (target === modalRegWind) {
        modalRegWind.style.visibility = 'hidden'
        modalRegWind.style.opacity = 0;
        isModalRegOpen = 0
    }
}

const openModal = () => {
    modalWind.style.visibility = 'visible'
    modalWind.style.opacity = 1;
    isModalLogOpen = 1
    if (isModalRegOpen === 1) {
         modalRegWind.style.visibility = 'visible'
        modalRegWind.style.opacity = 1;
    }
}

const openRegModal = () => {
     modalRegWind.style.visibility = 'visible'
    modalRegWind.style.opacity = 1;
    isModalRegOpen = 1;
    if (isModalLogOpen === 1) {
        modalWind.style.visibility = 'visible'
    modalWind.style.opacity = 1;
    }
}

buttonOpenReg.addEventListener("click", openRegModal)
buttonOpenLog.addEventListener("click", openModal)
modalWind.addEventListener("click", closeModal)
crossCloseReg.addEventListener("click", closeModal)
modalRegWind.addEventListener("click",closeModal)
headerClose.addEventListener("click", closeModal)