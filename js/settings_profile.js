const btnApply = document.getElementById('button__apply');
btnApply.addEventListener('click', () => {
  btnApply.classList.add('disable');
  const textEl = btnApply.querySelector('.text__modal__balance__button');
  if (textEl) {
    textEl.textContent = 'Письмо отправлено';
  }
  setTimeout(() => {
    window.location.href = '../letter_sent.html';
  }, 3000);
});

const dataContentChanger = document.querySelector('.data__content__changer')
const dataContent = document.querySelector('.data__content')
const changeDataBtn = document.getElementById('changeData')
changeDataBtn.addEventListener('click', () => {
  changeDataBtn.style.display = 'none';
  dataContent.style.display = 'none';
  dataContentChanger.style.display = 'block';
})

const namelabel = document.getElementById('nameLabel')
const emailLabel = document.getElementById('emailLabel')
const nameText = document.getElementById('top__text__desc1')
const emailText = document.getElementById('top__text__desc2')
const inputName = document.getElementById('nameChangeInput');
const inputEmail = document.getElementById('emailChangeInput');
inputName.value = nameText.textContent.trim();
inputEmail.value = emailText.textContent.trim();
const checkInputName = inputName.value;
const checkInputEmail = inputEmail.value;
const btnBack = document.getElementById('btnBack')
const btnSave = document.getElementById('btnSave')
function toggleLabel(input, label) {
  if (input.value.trim() === '') {
    label.style.display = 'none';
    input.style.padding = '16px 20px'; // без верхнего отступа, если нужно
  } else {
    label.style.display = 'block';
    input.style.padding = '24px 20px 8px 20px';
  }
}

function activeSave(input, label) {
  if (input.value.trim() !== checkInputEmail) {
    btnSave.classList.remove('disable')
  }
  else if (input.value.trim() === checkInputEmail) {
    btnSave.classList.add('disable')
  }
}

toggleLabel(inputName, namelabel);
toggleLabel(inputEmail, emailLabel);

// Обработка ввода
inputName.addEventListener('input', () => toggleLabel(inputName, namelabel));
inputName.addEventListener('input', () => activeSave(inputName, namelabel));
inputEmail.addEventListener('input', () => toggleLabel(inputEmail, emailLabel));
inputEmail.addEventListener('input', () => {
  activeSave(inputEmail, emailLabel);
});


btnBack.addEventListener('click', () => {
  changeDataBtn.style.display = 'block';
  dataContent.style.display = 'block';
  dataContentChanger.style.display = 'none';
})
btnSave.addEventListener('click', () => {
  changeDataBtn.style.display = 'block';
  dataContent.style.display = 'block';
  dataContentChanger.style.display = 'none';
  emailText.textContent = inputEmail.value;
})




const changePasswordBtn = document.getElementById('changePassword');
const changePasswordContainer = document.querySelector('.change__password__container');
const passwordContent = document.querySelector('.password__bottom');
const btnSave1 = document.getElementById('btnSave1');

const newPasswordInput = document.getElementById('newPassword');
const repeatPasswordInput = document.getElementById('repeatPassword');

// Показать блок смены пароля
changePasswordBtn.addEventListener('click', () => {
  changePasswordBtn.style.display = 'none';
  passwordContent.style.display = 'none';
  changePasswordContainer.style.display = 'block';
});

// Проверка совпадения паролей
function validatePasswords() {
  const newPass = newPasswordInput.value;
  const repeatPass = repeatPasswordInput.value;

  if (newPass && repeatPass && newPass === repeatPass) {
    btnSave1.classList.remove('disable');
  } else {
    btnSave1.classList.add('disable');
  }
}

newPasswordInput.addEventListener('input', validatePasswords);
repeatPasswordInput.addEventListener('input', validatePasswords);

// Показать/скрыть пароль по клику на глазик
document.querySelectorAll('.toggle-password').forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    const wrapper = eyeIcon.closest('.input-wrapper');
    const input = wrapper.querySelector('input');

    if (!input) return;

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    // Хочешь — меняем картинку тоже:
    eyeIcon.src = isPassword 
      ? './assets/img/main/main_reg/eye-2.svg' // открытый глаз
      : './assets/img/main/main_reg/eye-1.svg'; // закрытый глаз
  });
});


