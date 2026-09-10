const express = require('express'); // Підключаємо модуль Express для обробки HTTP-запитів
const http = require('http'); // Підключаємо вбудований в Node.js модуль для роботи з HTTP
const socketIo = require('socket.io'); // Підключаємо модуль socket.io для реалізації веб-сокетів

const app = express(); // Створюємо екземпляр Express-додатку
const server = http.createServer(app); // Створюємо HTTP-сервер з використанням Express-додатку
const io = socketIo(server); // Підключаємо socket.io до HTTP-серверу

io.on('connection', (socket) => {
    // Встановлюємо обробник події 'connection', який активується, коли новий клієнт підключається
    console.log('A new user connected'); // Виводимо повідомлення в консоль, коли новий користувач підключається

    socket.emit('welcome', 'Welcome to the server!'); // Відправляємо вітальне повідомлення новопідключеному клієнту

    socket.on('disconnect', () => {
        // Встановлюємо обробник події 'disconnect', який активується, коли клієнт відключається
        console.log('A user disconnected'); // Виводимо повідомлення в консоль, коли користувач відключається
    });
});

server.listen(3000, () => {
    // Запускаємо сервер на порту 3000
    console.log('Server is listening on port 3000'); // Виводимо повідомлення в консоль, що сервер слухає на порту 3000
});