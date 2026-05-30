const loginForm = document.getElementById('loginForm');
const idInput = document.getElementById('userId');
const pwInput = document.getElementById('userPw');
const loginBtn = document.getElementById('loginBtn');

loginForm.addEventListener('input', () => {
    const idValue=idInput.value.trim();
    const pwValue=pwInput.value.trim();

    const isIdFilled = idValue.length > 0;
    const isPwValid = pwValue.length >= 8;

    if (isIdFilled && isPwValid) {
        loginBtn.disabled = false;
        loginBtn.classList.add('active');
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    }
})