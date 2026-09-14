// const dns = require('dns');

// // Розв'язування доменного імені google.com
// dns.resolve4('google.com', (err, addresses) => {
//   if (err) {
//     console.error('Помилка розв\\\'язання доменного імені:', err);
//     return;
//   }
//   console.log(`IP-адреси для google.com: ${addresses.join(', ')}`);
// });

// // Зворотній пошук для IP-адреси
// const ip = '8.8.8.8';
// dns.reverse(ip, (err, hostnames) => {
//   if (err) {
//     console.error('Помилка зворотного пошуку:', err);
//     return;
//   }
//   console.log(`Доменні імена для IP-адреси ${ip}: ${hostnames.join(', ')}`);
// });

//////////////// працює

const dns = require('node:dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);

dns.resolve4('google.com', (err, addresses) => {
  if (err) {
    console.error('Помилка розв’язання доменного імені:', err);
    return;
  }

  console.log(`IP-адреси для google.com: ${addresses.join(', ')}`);
});

dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.error('Помилка зворотного пошуку:', err);
    return;
  }

  console.log(`Доменні імена: ${hostnames.join(', ')}`);
});

// ////////////

dns.lookup('google.com', (err, address) => {
  if (err) console.error(err);
  else console.log("Address:", address);
});