const viewButtons = document.querySelectorAll('.button__view');
const gameImg = document.querySelector('.game__img');
const mainTop = document.querySelector('.main_top');
const main = document.querySelector('.main');
const changeView = document.querySelectorAll('.button__view');

let isFullScreen = false;

// Слушатели на кнопки вида
viewButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    viewButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (index === 1) {
      // Полноэкранный режим
      gameImg.classList.add('fullscreen');
      main.classList.add('fullscreen-mode');
      isFullScreen = true;
      mainTop.classList.add('active')
    } else {
      // Обычный режим
      gameImg.classList.remove('fullscreen');
      main.classList.remove('fullscreen-mode');
      mainTop.style.top = '0'; // возвращаем панель
      mainTop.classList.remove('active')
      isFullScreen = false;
    }
  });
});

// Показывать верхнюю панель при наведении вверх
document.addEventListener('mousemove', (e) => {
  if (isFullScreen) {
    if (e.clientY < 80) {
      mainTop.style.top = '0';
    } else {
      mainTop.style.top = '-100px';
    }
  }
});

const favButtons = document.querySelectorAll('.fav-btn');
const svg1 = document.querySelector('.view-svg1')
const svg2 = document.querySelector('.view-svg2')
changeView.forEach(button => {
  button.addEventListener('click', () => {
    if(button.querySelector('svg.view-svg2')){
      svg2.setAttribute('fill', '#e8b21d'); 
      svg1.setAttribute('fill', '#a68e62'); // Возвращаем обратно
    }
    else{
      svg1.setAttribute('fill', '#e8b21d');
      svg2.setAttribute('fill', '#a68e62')
    }
  });
});


const balanceWrapper =  document.querySelector('.balance-wrapper')
  const btn = document.getElementById('balanceButton');
  const modal = document.getElementById('balanceModal');
const arrowIcon = document.querySelector('.arrow-icon')
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    balanceWrapper.classList.toggle('active')
    modal.classList.toggle('hidden');
    btn.classList.toggle('active')
    arrowIcon.classList.toggle('active')
  });

  document.addEventListener('click', () => {
    modal.classList.add('hidden');
    balanceWrapper.classList.remove('active')
    btn.classList.remove('active')
    arrowIcon.classList.remove('active')
  });

  modal.addEventListener('click', (e) => e.stopPropagation());

