const zlib = require('zlib');
const { promisify } = require('util');

// Промісифікуємо функції для зручності використання з async/await
const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);

async function compressAndDecompress() {
  const originalString = 'Наші секретні дані, які потребують стиснення';
  console.log(`Оригінальний рядок: ${originalString}`);

  // Стиснення даних
  const compressed = await gzip(originalString);
  console.log(`Стиснені дані: ${compressed.toString('base64')}`);

  // Розпакування даних
  const decompressed = await gunzip(compressed);
  console.log(`Розпакований рядок: ${decompressed.toString()}`);
}

compressAndDecompress().catch(console.error);