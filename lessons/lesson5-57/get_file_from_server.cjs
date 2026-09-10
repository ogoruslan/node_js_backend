const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
  // Встановлюємо правильний заголовок
  res.writeHead(200, { 'Content-Type': 'video/mp4' });

  // Стрімимо відео прямо в браузер клієнта
  const videoStream = fs.createReadStream('movie.mp4');
  videoStream.pipe(res);
}).listen(3000, () => console.log('Сервер працює на порті 3000'));
