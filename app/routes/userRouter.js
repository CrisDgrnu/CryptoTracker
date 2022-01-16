const user = require('express').Router();

// Services
const userService = require('../services/userService');

// Middleware
const checkContent = require('../middlewares/checkContent');
const error = require('../middlewares/handleError');

// Find by id
user.get('/:id', (req, res, next) => {
  const { id } = req.params;

  userService
    .findOneById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

// Check if body has content
user.use(checkContent);

// Create new user
user.post('/', (req, res, next) => {
  const { body } = req;

  userService
    .create(body)
    .then((user) => {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(409).json({
          error: 'this username is already in use',
        });
      }
    })
    .catch(next);
});

user.use(error);

module.exports = user;
