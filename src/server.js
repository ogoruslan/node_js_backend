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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});