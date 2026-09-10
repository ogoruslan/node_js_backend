const fs = require('fs');
const stream = require('stream');
const path = require('path');

// Створюємо потік читання
const readStream = fs.createReadStream(path.join(__dirname, 'source.txt'));

// Створюємо потік запису
const writeStream = fs.createWriteStream(path.join(__dirname, 'destination.txt'));

// Передача даних з потоку читання в потік запису
readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
    console.log('Новий шматок даних отримано:', chunk);
});

writeStream.on('finish', () => {
    console.log('Дані успішно записані до destination.txt');
});

readStream.on('error', (err) => {
    console.error('Сталася помилка під час читання файлу:', err);
});

writeStream.on('error', (err) => {
    console.error('Сталася помилка під час запису файлу:', err);
});