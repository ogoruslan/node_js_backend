import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});