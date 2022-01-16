const emptyObject = require('../utils/emptyObject');

module.exports = (req, res, next) => {
  const data = req.body;

  if (emptyObject(data) || !data)
    return res.status(400).json({ error: 'error entry content is empty' });

  next();
};
