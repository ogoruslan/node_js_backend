import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import articleRoutes from './routes/articles.js';
import rootController from './controllers/rootController.js';
import userRoutes from './routes/users.js';
import setupSwagger from './swagger.js';
import {
  errorHandler,
  logRequests,
  requireAuth,
  sessionMiddleware,
  validateArticleAccess,
  validateUserInput
} from './middleware.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(logRequests);
app.use(sessionMiddleware);
setupSwagger(app);
app.get('/', rootController.getRoot);

// app.use('/users', requireAuth, userRoutes);
app.use('/articles', validateArticleAccess, articleRoutes);
app.use('/users', validateUserInput);
app.use(errorHandler);

// Налаштування EJS як движка шаблонів
app.set('view engine', 'ejs');
app.set('views', resolve(dirname(fileURLToPath(import.meta.url)), 'views'));

// Маршрут для головної сторінки
app.get('/ejs', (req, res) => {
  const data = { title: 'Cторінка шаблону', message: 'Привіт, світе!' };
  res.render('ejs', data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});