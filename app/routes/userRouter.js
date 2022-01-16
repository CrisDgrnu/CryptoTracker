const user = require('express').Router();

// Services
const userService = require('../services/userService');

// Middleware
const checkContent = require('../middlewares/checkContent');
const error = require('../middlewares/handleError');

// // Find all
// user.get('/', (req, res, next) => {
//   userService
//     .findAll()
//     .then((users) => {
//       res.status(200).json(entries);
//     })
//     .catch(next);
// });

// // Find all by currency
// user.get('/:currency', (req, res, next) => {
//   const { currency } = req.params;

//   userService
//     .findAllByCurrency(currency)
//     .then((entries) => {
//       res.status(200).json(entries);
//     })
//     .catch(next);
// });

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

// // Delete an entry by id
// user.delete('/:id', (req, res, next) => {
//   const { id } = req.params;

//   userService
//     .remove(id)
//     .then((entry) => {
//       if (entry != null) {
//         res.status(200).json(entry);
//       } else {
//         res.status(404).json({ message: `Entry with id ${id} not found` });
//       }
//     })
//     .catch(next);
// });

// Check if body has content
user.use(checkContent);

// user.put('/:id', (req, res, next) => {
//   const { id } = req.params;
//   const data = req.body;

//   userService
//     .update(id, data)
//     .then((entry) => {
//       res.status(200).json(entry);
//     })
//     .catch(next);
// });

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
