const http = require('node:http');
const fs = require('node:fs');

const file = fs.createWriteStream("google_logo.png");

// Робимо запит і перенаправляємо відповідь (response) у файл
http.get("http://google.com", function(response) {
  response.pipe(file);
  
  file.on('finish', () => {
    console.log('Зображення успішно завантажено!');
  });
});
