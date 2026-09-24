import test from 'node:test';
import assert from 'node:assert/strict';
import {
  logRequests,
  requireAuth,
  validateUserInput,
  validateArticleAccess,
  sessionMiddleware,
  errorHandler
} from './middleware.js';

test('logRequests calls next and logs a request', () => {
  const req = { method: 'GET', url: '/users' };
  const res = {};
  let called = false;

  logRequests(req, res, () => {
    called = true;
  });

  assert.equal(called, true);
});

test('requireAuth rejects missing Authorization header', () => {
  const req = { headers: {} };
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
    send(payload) {
      this.payload = payload;
      return this;
    }
  };

  let nextCalled = false;
  requireAuth(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 401);
  assert.equal(nextCalled, false);
});

test('validateUserInput rejects missing username or password', () => {
  const req = { body: { username: 'alice' } };
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
    send(payload) {
      this.payload = payload;
      return this;
    }
  };

  let nextCalled = false;
  validateUserInput(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 400);
  assert.equal(nextCalled, false);
});

test('validateArticleAccess allows non-admin read access', () => {
  const req = { method: 'GET', headers: { 'x-user-role': 'user' } };
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
    send(payload) {
      this.payload = payload;
      return this;
    }
  };

  let nextCalled = false;
  validateArticleAccess(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 200);
  assert.equal(nextCalled, true);
});

test('validateArticleAccess rejects non-admin write access', () => {
  const req = { method: 'POST', headers: { 'x-user-role': 'user' } };
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
    send(payload) {
      this.payload = payload;
      return this;
    }
  };

  let nextCalled = false;
  validateArticleAccess(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 403);
  assert.equal(nextCalled, false);
});

test('sessionMiddleware initializes session data', () => {
  const req = {};
  const res = {};
  let nextCalled = false;

  sessionMiddleware(req, res, () => {
    nextCalled = true;
  });

  assert.equal(Boolean(req.session), true);
  assert.equal(nextCalled, true);
});

test('errorHandler returns a 500 response', () => {
  const err = new Error('Something went wrong');
  const req = {};
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
    send(payload) {
      this.payload = payload;
      return this;
    }
  };

  errorHandler(err, req, res, () => {});

  assert.equal(res.statusCode, 500);
});
