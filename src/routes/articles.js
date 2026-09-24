import { Router } from 'express';
import articlesController from '../controllers/articlesController.js';
import { validateArticleAccess } from '../middleware.js';

const router = Router();

/**
 * @openapi
 * /articles:
 *   get:
 *     summary: Get all articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Successful response
 *   post:
 *     summary: Create an article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article created
 */
router.get('/', validateArticleAccess, articlesController.getArticles);
router.post('/', validateArticleAccess, articlesController.createArticle);

/**
 * @openapi
 * /articles/{articleId}:
 *   get:
 *     summary: Get an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: articleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article found
 *   put:
 *     summary: Update an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: articleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article updated
 *   delete:
 *     summary: Delete an article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: articleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article deleted
 */
router.get('/:articleId', validateArticleAccess, articlesController.getArticleById);
router.put('/:articleId', validateArticleAccess, articlesController.updateArticle);
router.delete('/:articleId', validateArticleAccess, articlesController.deleteArticle);

export default router;