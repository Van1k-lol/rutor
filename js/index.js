const slides = document.querySelectorAll('.slide');
const bars = document.querySelectorAll('.bar');
const slidesContainer = document.getElementById('slides');
const slider = document.getElementById('slider');
let current = 0;
let startX = 0;
let isDragging = false;
let autoSlideInterval;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  bars.forEach((bar, i) => bar.classList.toggle('active', i === index));
  current = index;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Клик по полоске
bars.forEach(bar => {
  bar.addEventListener('click', () => {
    stopAutoSlide();
    showSlide(Number(bar.dataset.index));
    startAutoSlide();
  });
});


// Запуск
showSlide(0);
startAutoSlide();


// 125412523452352


const modal = document.getElementById('gameModal');
const openBtn = document.querySelector('.search');
const closeBtn = document.querySelector('.modal__close');
const searchInput = document.getElementById('searchInput');
const gamesGrid = document.getElementById('gamesGrid');

const games = [
  { name: 'Rise of Merlin', img: '../assets/img/main/main/games/1game.png' },
  { name: '40 Joker Staxx', img: './assets/games/game2.jpg' },
  { name: 'Sevens & Fruits', img: './assets/games/game3.jpg' },
  { name: '6 Jokers', img: './assets/games/game4.jpg' },
  { name: 'Mysterious Egypt', img: './assets/games/game5.jpg' },
  { name: 'Big Bass Bonanza', img: './assets/games/game6.jpg' },
  { name: 'Mustang Trail', img: './assets/games/game7.jpg' },
  { name: 'Book of Gold', img: './assets/games/game8.jpg' },
  { name: '3 Genie Wishes', img: './assets/games/game9.jpg' },
  // можно добавить ещё кучу карточек!
];

// Функция рендера карточек
function renderGames(gamesArray) {
  gamesGrid.innerHTML = '';
  gamesArray.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.innerHTML = `<img src="${game.img}" alt="${game.name}" title="${game.name}">`;
    gamesGrid.appendChild(card);
  });
}

// Открытие модалки
openBtn.addEventListener('click', () => {
  modal.classList.add('active');
  renderGames(games);
});

// Закрытие модалки
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Поиск
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(value));
  renderGames(filteredGames);
});


// dfjskhjdfojhsogksd

document.querySelectorAll('.toggleBtn').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');

    const toggleContainer = toggle.closest('.toggle-container');
    if (!toggleContainer) return;

    const toggleText = toggleContainer.querySelector('.toggle-text');
    if (toggleText) {
      toggleText.textContent = toggle.classList.contains('active') ? 'Свернуть' : 'Развернуть';
    }

    const gamesTop = toggle.closest('.games_top');
    if (!gamesTop) return;

    const gamesWrap = gamesTop.parentElement; // .games__wrap
    if (!gamesWrap) return;

    const gamesBottom = gamesWrap.querySelector('.games_bottom');
    if (gamesBottom) {
      gamesBottom.classList.toggle('hidden');
    }
  });
});


  // const toggleBtn = document.querySelectorAll('.toggleBtn');

  // toggleBtn.forEach(button => {
  //   button.addEventListener('click', () => {
  //     button.classList.toggle('active');
  //     const isActive = button.classList.contains('active');
  //     const toggleText = button.querySelector('.toggle-text');
  //     toggleText.textContent = isActive ? 'Развернуть' : 'Свернуть';
  //     document.getElementById('favorites_bottom').classList.toggle('hidden');
  //   });
  // });

// 1242135645754
const favButtons = document.querySelectorAll('.fav-btn');

favButtons.forEach(button => {
  button.addEventListener('click', () => {
    const svg = button.querySelector('.fav-icon');
    
    if (svg.getAttribute('fill') === '#3b2b0d') {
      svg.setAttribute('fill', '#e8b21d'); // Красим сердечко в красный
    } else {
      svg.setAttribute('fill', '#3b2b0d'); // Возвращаем обратно
    }
  });
});