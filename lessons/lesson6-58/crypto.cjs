const crypto = require('crypto');

// Генерація хешу для паролю з сіллю
const password = 'superSecret123';
const salt = crypto.randomBytes(16).toString('hex');
const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

// Перевірка хешу
const inputPassword = 'superSecret123';
const inputHash = crypto.pbkdf2Sync(inputPassword, salt, 10000, 64, 'sha512').toString('hex');
if (hash === inputHash) {
    console.log('Пароль вірний.', hash);
} else {
    console.log('Пароль невірний.');
}