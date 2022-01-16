const entry = require('express').Router();

// Services
const entryService = require('../services/entryService');
const loginService = require('../services/loginService');

// Middleware
const checkContent = require('../middlewares/checkContent');
const error = require('../middlewares/handleError');

// Find all
entry.get('/', (req, res, next) => {
  entryService
    .findAll()
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch(next);
});

// Find all by currency
entry.get('/:currency', (req, res, next) => {
  const { currency } = req.params;

  entryService
    .findAllByCurrency(currency)
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch(next);
});

// Delete an entry by id
entry.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  entryService
    .remove(id)
    .then((entry) => {
      if (!entry) {
        res.status(404).json({ message: `Entry with id ${id} not found` });
      } else {
        res.status(200).json(entry);
      }
    })
    .catch(next);
});

// Check if body has content
entry.use(checkContent);

entry.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  entryService
    .update(id, body)
    .then((entry) => {
      if (!entry) {
        res
          .status(404)
          .json({ message: `Entry with id ${id} not found` })
          .end();
      } else {
        res.status(200).json(entry);
      }
    })
    .catch(next);
});

// Create new entry
entry.post('/', (req, res, next) => {
  const { body } = req;
  const authorization = req.get('authorization');

  const verified = loginService.verify(authorization);

  if (!verified) {
    return res.status(401).json({
      error: 'invalid or missing token',
    });
  }
  entryService
    .create(body, next)
    .then((entry) => {
      res.status(201).json(entry);
    })
    .catch(next);
});

entry.use(error);

module.exports = entry;
