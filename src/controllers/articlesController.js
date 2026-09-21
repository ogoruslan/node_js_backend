const getArticles = (req, res) => {
  res.type('text').send('Get articles route');
};

const createArticle = (req, res) => {
  res.type('text').send('Post articles route');
};

const getArticleById = (req, res) => {
  res.type('text').send(`Get article by Id route: ${req.params.articleId}`);
};

const updateArticle = (req, res) => {
  res.type('text').send(`Put article by Id route: ${req.params.articleId}`);
};

const deleteArticle = (req, res) => {
  res.type('text').send(`Delete article by Id route: ${req.params.articleId}`);
};

export default {
  getArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle
};