document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const resultElement = document.getElementById('result');

    if (password !== confirmPassword) {
        resultElement.textContent = 'Паролі не співпадають. Будь ласка, перевірте ще раз.';
        resultElement.style.color = 'red';
        return;
    }

    resultElement.textContent = 'Реєстрація успішна!';
    resultElement.style.color = 'green';

    console.log('Реєстраційні дані:');
    console.log('Ім\'я користувача:', username);
    console.log('Пароль:', password);
    console.log('Персональні дані:');
    console.log('Ім\'я:', firstName);
    console.log('Прізвище:', lastName);
    console.log('Електронна пошта:', email);
    console.log('Дата народження:', dob);
});
