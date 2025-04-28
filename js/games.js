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

    const gamesWrap = gamesTop.parentElement; 
    if (!gamesWrap) return;

    const gamesBottom = gamesWrap.querySelector('.games_bottom');
    if (gamesBottom) {
      gamesBottom.classList.toggle('hidden');
    }
  });
});



const favButtons = document.querySelectorAll('.fav-btn');

favButtons.forEach(button => {
  button.addEventListener('click', () => {
    const svg = button.querySelector('.fav-icon');
    
    if (svg.getAttribute('fill') === '#3b2b0d') {
      svg.setAttribute('fill', '#e8b21d'); 
    } else {
      svg.setAttribute('fill', '#3b2b0d'); 
    }
  });
});