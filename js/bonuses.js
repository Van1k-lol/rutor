const Btn = document.querySelector('.conditions');
const conditionsList = document.querySelector('.conditions__list');
Btn.addEventListener('click', () => {
  if (conditionsList.classList.contains('active')) {
    conditionsList.classList.remove('active');
    Btn.classList.remove('active');
  } else {
    conditionsList.classList.add('active');
    Btn.classList.add('active');
  }
})