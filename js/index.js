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

  const toggleBtn = document.getElementById('toggleBtn');
  const toggleText = document.querySelector('.toggle-text');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    const isActive = toggleBtn.classList.contains('active');
    toggleText.textContent = isActive ? 'Развернуть' : 'Свернуть';
    document.getElementById('favorites_bottom').classList.toggle('hidden');
    // Здесь можешь добавить логику отображения/скрытия блоков
    // Например:
    // document.getElementById('gallery').classList.toggle('hidden');
  });
