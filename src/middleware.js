export function logRequests(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
  next();
}

export function requireAuth(req, res, next) {
  const authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Access denied. No credentials sent.' });
  }

  next();
}

export function validateUserInput(req, res, next) {
  // console.log('Validating user input...',  req);
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({
      message: 'Missing required fields: username and password'
    });
  }

  next();
}

export function validateArticleAccess(req, res, next) {
  const role = req.headers?.['x-user-role'] || req.headers?.['X-User-Role'];

  if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }

  next();
}

export function sessionMiddleware(req, res, next) {
  req.session = req.session || {
    isAuthenticated: false,
    userId: null
  };

  next();
}

export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
}
