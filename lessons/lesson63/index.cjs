const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Налаштування шляху до папки для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для головної сторінки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});