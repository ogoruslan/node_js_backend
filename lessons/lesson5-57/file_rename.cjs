const fs = require('node:fs');

// Создаем поток чтения
const readableStream = fs.createReadStream('input.txt');

// Создаем поток записи
const writableStream = fs.createWriteStream('output.txt');

// Перенаправляем данные из одного потока в другой
readableStream.pipe(writableStream);

console.log('Копирование началось...');