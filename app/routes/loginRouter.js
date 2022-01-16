const login = require('express').Router();

// Services
const loginService = require('../services/loginService');

// Middleware
const checkContent = require('../middlewares/checkContent');
const error = require('../middlewares/handleError');

// Log in a user
login.post('/', (req, res, next) => {
  const { body } = req;
  const { username, password } = body;

  loginService
    .login(username, password)
    .then((auth) => {
      if (!auth.passwordCorrect) {
        res.status(401).json({
          error: 'invalid user or password',
        });
      } else {
        res.status(200).json({ token: auth.token });
      }
    })
    .catch(next);
});

module.exports = login;
