const fs = require('fs');

// 1. Синхронний код
console.log('1. Синхронний старт');

// 2. Черга таймерів (Макрозадача)
setTimeout(() => {
  console.log('7. Черга таймерів (setTimeout)');
}, 0);

// 3. Черга перевірок (Check phase)
setImmediate(() => {
  console.log('8. Черга перевірок (setImmediate)');
});

// 4. Імітація Черги вводу/виводу (I/O) - читання цього ж файлу
fs.readFile(__filename, () => {
  console.log('9. Черга I/O (Файл прочитано)');
  
  // ЦІКАВИЙ НЮАНС: Всередині I/O фази setImmediate ЗАВЖДИ виконається швидше за setTimeout
  setImmediate(() => console.log('11. Вкладений setImmediate (після I/O)'));
  setTimeout(() => console.log('12. Вкладений setTimeout (після I/O)'), 0);
});

// 5. Черга мікрозадач (V8 Promises)
Promise.resolve().then(() => {
  console.log('4. Черга мікрозадач (Promise.then)');
});

// 6. Черга "next tick" (Найвищий пріоритет серед асинхронних)
process.nextTick(() => {
  console.log('3. Черга next tick (process.nextTick)');
});

// 7. Синхронний кінець
console.log('2. Синхронний кінець');
