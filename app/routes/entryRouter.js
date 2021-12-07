const entry = require('express').Router();

// Services
const entryService = require('../services/entryService');

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
      if (entry != null) {
        res.status(200).json(entry);
      } else {
        res.status(404).json({ message: `Entry with id ${id} not found` });
      }
    })
    .catch(next);
});

// Check if body has content
entry.use(checkContent);

entry.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  entryService
    .update(id, data)
    .then((entry) => {
      res.status(200).json(entry);
    })
    .catch(next);
});

// Create new entry
entry.post('/', (req, res, next) => {
  const data = req.body;

  entryService
    .create(data)
    .then((entry) => {
      res.status(200).json(entry);
    })
    .catch(next);
});

entry.use(error);

module.exports = entry;
