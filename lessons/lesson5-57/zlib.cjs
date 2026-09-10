const fs = require('node:fs');
const zlib = require('node:zlib');

// Читаємо файл -> Стискаємо в gzip -> Записуємо новий архів
fs.createReadStream('large_document.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('large_document.txt.gz'));

console.log('Файл успішно стискається...');
