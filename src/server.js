import express from 'express';
import articleRoutes from './routes/articles.js';
import rootController from './controllers/rootController.js';
import userRoutes from './routes/users.js';
import setupSwagger from './swagger.js';

const app = express();
const port = 3000;

app.use(express.json());
setupSwagger(app);
app.get('/', rootController.getRoot);
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});