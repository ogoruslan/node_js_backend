const crypto = require('node:crypto');
const fs = require('node:fs');

const hash = crypto.createHash('sha256');
const input = fs.createReadStream('secure_data.bin');

// Перенаправляємо файл в об'єкт хешування
input.pipe(hash);

// Коли всі дані пройдуть крізь потік, виводимо результат
hash.on('readable', () => {
  const data = hash.read();
  if (data) {
    console.log(`SHA-256 хеш файлу: ${data.toString('hex')}`);
  }
});
